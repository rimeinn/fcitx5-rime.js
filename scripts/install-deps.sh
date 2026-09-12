set -e

pnpm i --prefix=fcitx5-js
pnpm i --prefix=fcitx5-js/fcitx5-webview
pnpm i --prefix=fcitx5-js/fcitx5-keyboard-web
pnpm --prefix=fcitx5-js/fcitx5-webview run build
pnpm --prefix=fcitx5-js/fcitx5-keyboard-web run build

mkdir -p cache
./fcitx5-js/scripts/install-deps.sh
file=rime.zip
[[ -f cache/$file ]] || curl -fsSLO --output-dir cache https://github.com/fcitx-contrib/fcitx5-plugins/releases/download/js/$file
unzip -d build/sysroot/usr cache/$file

mkdir -p build/fcitx5-js
ln -sf ../sysroot build/fcitx5-js
ln -sf ../build/fcitx5-js fcitx5-js/build
