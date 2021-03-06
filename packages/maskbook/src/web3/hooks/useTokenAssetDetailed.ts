import {
    ERC1155TokenAssetDetailed,
    ERC1155TokenDetailed,
    ERC721TokenAssetDetailed,
    ERC721TokenDetailed,
    EthereumTokenType,
} from '../types'
import { useERC721TokenAssetDetailed } from './useERC721TokenAssetDetailed'
import { useERC1155TokenAssetDetailed } from './useERC1155TokenAssetDetailed'
import type { AsyncStateRetry } from 'react-use/lib/useAsyncRetry'
import { unreachable } from '../../utils/utils'

export function useTokenAssetDetailed(token?: ERC721TokenDetailed | ERC1155TokenDetailed) {
    const r1 = useERC721TokenAssetDetailed(token?.type === EthereumTokenType.ERC721 ? token : undefined)
    const r2 = useERC1155TokenAssetDetailed(token?.type === EthereumTokenType.ERC1155 ? token : undefined)

    const type = token?.type ?? EthereumTokenType.ERC721
    switch (type) {
        case EthereumTokenType.ERC721:
            return r1 as AsyncStateRetry<ERC721TokenAssetDetailed | undefined>
        case EthereumTokenType.ERC1155:
            return r2 as AsyncStateRetry<ERC1155TokenAssetDetailed | undefined>
        default:
            unreachable(type)
    }
}
