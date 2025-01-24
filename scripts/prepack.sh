set -e

rm -rf dist/*
mkdir -p dist

cp build/fcitx5-js/destdir/usr/lib/libFcitx5* dist
cp build/fcitx5-js/src/Fcitx5.* dist
cat fcitx5-js/page/Fcitx5.d.ts src/fcitx5-rime.d.ts > dist/Fcitx5.d.ts
