<template>
  <div class="page-loading">
    <div class="img">
      <img :src="require('../../assets/img/loading.gif')" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageLoading'
}
</script>

<style lang="scss" scoped>
.page-loading {
  width: 100vw;
  height: 100vh;
  background-color: #fff;

  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    width: 50rem;
    transform: translate(-50%, -50%);
  }
}
</style>