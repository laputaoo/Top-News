<template>
  <div class="more-loading">
    <span v-if="hasMore" class="more-data">
      正在加载更多
    </span>
    <span v-if="!hasMore">
      没有更多新闻了
    </span>
  </div>
</template>

<script>
export default {
  name: 'MoreLoading',
  props: {
      hasMore: Boolean    
    }
}
</script>

<style lang="scss" scoped>
.more-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  padding-bottom: 1rem;
  color: #999;
  font-size: 1.4rem;
  background-color: #fff;

  .more-data {
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '';      
      position: absolute;
      left: -.5rem;
      top: -.1rem;
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      background-image: url('../../assets/img/loading1.gif');
      background-repeat: no-repeat;
      background-size: 2rem 1.5rem;
      background-position: 0 0;

    }
  }
}
</style>