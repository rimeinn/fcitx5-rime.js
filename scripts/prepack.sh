set -e

rm -rf dist/*
mkdir -p dist

cp build/sysroot/usr/lib/libFcitx5* dist
cp build/fcitx5-js/src/Fcitx5.* dist
cp fcitx5-js/page/Fcitx5.d.ts dist
