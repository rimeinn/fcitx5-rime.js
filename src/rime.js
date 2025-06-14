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
        const response = await fetch(fileOrUrl)
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