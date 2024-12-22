export async function loadZip(url) {
  const [_, schema] = await Promise.all([
    fcitxReady,
    fetch(url).then(res => res.arrayBuffer())
  ])
  window.fcitx.unzip(schema, '/usr/share/rime-data')
  window.fcitx.enable()
  window.fcitx.setInputMethods(['rime'])
}
