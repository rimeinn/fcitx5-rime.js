import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const wasmPath = 'node_modules/fcitx5-rime/dist/'

// https://vite.dev/config/
export default defineConfig({
  base: '',
  optimizeDeps: {
    // Don't pre-bundle it to node_modules/.vite/deps as wasm won't be copied there.
    exclude: ['fcitx5-rime'],
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: ['Fcitx5.js', 'Fcitx5.wasm', 'libFcitx5Config.so', 'libFcitx5Core.so', 'libFcitx5Utils.so'].map(file => ({
        src: wasmPath + file,
        dest: 'assets'
      })),
    })
  ]
})
