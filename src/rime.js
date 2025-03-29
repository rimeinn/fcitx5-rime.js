export async function loadZip(url) {
  const [_, schema] = await Promise.all([
    fcitxReady,
    fetch(url).then(res => {
      if (!res.ok) {
        throw new Error(`Get ${url} error`);
      }
      return res.arrayBuffer()
    })
  ])
  // librime-qjs expects js in user dir.
  window.fcitx.unzip(schema, '/home/web_user/.local/share/fcitx5/rime')
  window.fcitx.enable()
  window.fcitx.setInputMethods(['rime'])
}
