<template>
  <iframe :src="url" frameborder="0" width="100%" height="100%" class="iframe"></iframe>
</template>

<script>
export default {
  name: 'NewsFrame',
  props: ['url']
}
</script>

<style>
.iframe {
  margin-top: 4.4rem;
}
</style>