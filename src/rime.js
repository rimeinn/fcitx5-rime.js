export async function loadZip(fileOrUrl) {
  const [_, schema] = await Promise.all([
    fcitxReady,
    (async () => {
      // Load schema from zip file or URL.
      if (fileOrUrl instanceof File || fileOrUrl instanceof Blob) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsArrayBuffer(fileOrUrl)
        })
      } else if (typeof fileOrUrl === 'string') {
        const parsed = new URL(fileOrUrl, window.location.href)
        const hostname = parsed.hostname.toLowerCase()
        const isPrivateHost = hostname === 'localhost' ||
          hostname === '169.254.169.254' ||
          /^127\./.test(hostname) ||
          /^10\./.test(hostname) ||
          /^192\.168\./.test(hostname) ||
          /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname) ||
          hostname === '::1'
        if (!['http:', 'https:'].includes(parsed.protocol) || isPrivateHost) {
          throw new Error(`Invalid or disallowed URL: ${fileOrUrl}`)
        }
        const response = await fetch(parsed.href)
        if (!response.ok) {
          throw new Error(`Get ${fileOrUrl} error`)
        }
        return response.arrayBuffer()
      }
      throw new Error('Invalid input: expected File object or URL string')
    })()
  ])

  // librime-qjs expects js in user dir.
  window.fcitx.unzip(schema, '/home/web_user/.local/share/fcitx5/rime')
  window.fcitx.enable()
  window.fcitx.setInputMethods(['rime'])
}
