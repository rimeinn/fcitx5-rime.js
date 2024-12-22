cmake_minimum_required(VERSION 3.27)

project(fcitx5-rime-js VERSION 0.1.0)

option(RIME_ONLY "" ON)
add_subdirectory(fcitx5-js)
target_link_libraries(Fcitx5
    "--embed-file ${PROJECT_BINARY_DIR}/sysroot/usr/lib/fcitx5/librime.so@/usr/lib/fcitx5/librime.so"
    "--embed-file ${PROJECT_BINARY_DIR}/sysroot/usr/share/fcitx5/addon/rime.conf@/usr/share/fcitx5/addon/rime.conf"
    "--embed-file ${PROJECT_BINARY_DIR}/sysroot/usr/share/fcitx5/inputmethod/rime.conf@/usr/share/fcitx5/inputmethod/rime.conf"
    "--embed-file ${PROJECT_BINARY_DIR}/sysroot/usr/share/rime-data/opencc@/usr/share/rime-data/opencc"
    "--extern-post-js ${PROJECT_SOURCE_DIR}/src/rime.js"
)
