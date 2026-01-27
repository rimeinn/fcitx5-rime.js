<script setup>
import { loadZip } from 'fcitx5-rime'

loadZip('./rime-ice.zip')
  .then(() => window.fcitx.setSystemInputMethodInUseCallback(() => alert('请禁用系统输入法'))) // 可选
</script>

<template>
  <textarea></textarea>
</template>

<style scoped>
textarea {
  width: 90vw;
  height: 50vh;
}
</style>
