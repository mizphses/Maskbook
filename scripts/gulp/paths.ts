import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join, relative } from 'path'
// Source file
export const srcPath = folder('../../src/')
export const entries = {
    content_script: file('../../src/content-script.ts').file,
    options_page: file('../../src/extension/options-page/index.tsx').file,
    background_page: file('../../src/background-service.ts').file,
    popup_page: file('../../src/extension/popup-page/index.tsx').file,
}
// Those files must be a single file as output.
export const IsolatedEntries = {
    injected_script: file('../../src/extension/injected-script/index.ts').file,
}
export const WorkerEntries = {
    qrcode_worker: file('../../src/web-workers/QRCode.ts').file,
    crypto_worker: file('../../src/modules/CryptoAlgorithm/EllipticBackend/worker.ts').file,
}

// assets
export const assetsPath = folder('../../public/')
export const manifestPath = file('../../src/manifest.json')

// config
export const tsconfigESMPath = file('../../tsconfig.esm.json')

// out
export const output = {
    temp: folder('../../temp/'),
    extension: folder('../../temp/extension/'),
    esmBuild: folder('../../temp/extension/esm/'),
    systemBuild: folder('../../temp/extension/system/'),
    libraries: folder('../../temp/extension/libraries/'),
    polyfills: folder('../../temp/extension/polyfills/'),
    loaders: folder('../../temp/extension/loaders/'),
    isolated: folder('../../temp/extension/isolated/'),
    workers: folder('../../temp/extension/workers/'),
}

// libs
export const librariesPath = {
    ttsclib: file('../../node_modules/@magic-works/ttypescript-browser-like-import-transformer/es/ttsclib.js'),
    webExtensionPolyfill: file('../../node_modules/webextension-polyfill/dist/browser-polyfill.js'),
}
function folder(x: string, path = join(__dirname, x)) {
    return {
        folder: path,
        files: join(path, '**/*'),
        js: join(path, '**/*.js'),
        relative: (x: string) => join(path, x),
        relativeFromCWD: (x: string) => relative(process.cwd(), join(path, x)),
        relativeFolder: (x: string) => folder(x, path),
        ensure() {
            if (!existsSync(path)) mkdirSync(path)
        },
    }
}
function file(x: string) {
    const file = join(__dirname, x)
    return {
        file,
        relative: (x: string) => join(file, x),
        ensure: (content = '') => !existsSync(file) && writeFileSync(file, content),
    }
}
