import { Attachment } from '@dimensiondev/common-protocols'
import Arweave from 'arweave/web'
import type Transaction from 'arweave/web/lib/transaction'
import { sign } from './remote-signing'
import token from './token.json'

export const landingPage = 'https://files.maskbook.com/partner/arweave/landing-page.html'

const instance = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
})

export function makeFileKey(length = 16) {
    let key = ''
    const table = 'ABDEFGHJKMNPQRTWXYadefhijkmnprstuvwxyz03478'
    for (let i = 0; i < length; i += 1) {
        key += table.charAt(Math.floor(Math.random() * table.length))
    }
    return key
}

export interface AttachmentOptions {
    key?: string | null
    type: string
    block: Uint8Array
}

export async function makeAttachment(options: AttachmentOptions) {
    const passphrase = options.key ? new TextEncoder().encode(options.key) : undefined
    const encoded = await Attachment.encode(passphrase, {
        block: options.block,
        metadata: null,
        mime: options.type,
    })
    return makePayload(encoded, options.type)
}

export interface LandingPageMetadata {
    key?: string | null
    name: string
    size: number
    type: string
    txId: string
}

export async function makeLandingPage(metadata: LandingPageMetadata) {
    const keyHash = metadata.key ? Attachment.checksum(new TextEncoder().encode(metadata.key)) : undefined
    const encodedMetadata = JSON.stringify({
        name: metadata.name,
        size: metadata.size,
        link: `https://arweave.net/${metadata.txId}`,
        keyHash,
        createdAt: new Date().toISOString(),
        mime: metadata.type,
    })
    const response = await fetch(landingPage)
    const text = await response.text()
    const replaced = text.replace('__METADATA__', encodedMetadata)
    const data = new TextEncoder().encode(replaced)
    return makePayload(data, 'text/html')
}

async function makePayload(data: Uint8Array, type: string) {
    const transaction = await instance.createTransaction({ data }, token as any)
    transaction.addTag('Content-Type', type)
    await sign(transaction)
    return transaction
}
