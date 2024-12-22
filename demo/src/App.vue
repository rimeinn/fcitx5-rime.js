<script setup lang="ts">
import { loadZip } from 'fcitx5-rime'

loadZip('./rime-ice.zip')
</script>

<template>
  <textarea></textarea>
</template>

<style scoped>
textarea {
  width: 400px;
  height: 200px;
}
</style>
