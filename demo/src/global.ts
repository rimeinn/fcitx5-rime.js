import type { FCITX } from 'fcitx5-rime'

declare global {
  interface Window {
    fcitx: FCITX
  }
}
