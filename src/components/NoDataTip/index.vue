<template>
  <div class="no-data-tip">
    <span>您还没有收藏新闻</span>
  </div>
</template>

<script>
export default {
  name: 'NoDataTip'
}
</script>

<style lang="scss" scoped>
.no-data-tip{
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.6rem;
    color: #888;
  }
}
</style>