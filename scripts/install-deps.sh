set -e

pnpm i --prefix=fcitx5-js
pnpm i --prefix=fcitx5-js/fcitx5-webview

./fcitx5-js/scripts/install-deps.sh
file=rime.zip
[[ -f cache/$file ]] || wget -P cache https://github.com/fcitx-contrib/fcitx5-plugins/releases/download/js/$file
unzip -d build/sysroot/usr cache/$file

mkdir -p build/fcitx5-js
ln -sf ../sysroot build/fcitx5-js
ln -sf ../build/fcitx5-js fcitx5-js/build
