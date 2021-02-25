<template>
  <nav class="nav-bar">
    <div class="scroll-area">
      <div 
        class="nav-wrapper"
        :style="{width: 6*itemList.length + 'rem'}"
      >
        <NavItem
          v-for="(item, index) in itemList"
          :key="index"
          :item= "item"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import NavItem from './item'
import itemList from '../../config/types'

export default {
  name: 'NavBar',
  data() {
    return {
      itemList : []
    }
  },
  created() {
    this.itemList = itemList.NEWS_TYPE
  },
  components: {
    NavItem
  },

}
</script>

<style lang="scss" scoped>
  .nav-bar {
    position: fixed;
    top: 4.4rem;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 3.5rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    overflow: hidden;

    .scroll-area {
      height: 4.2rem;
      -webkit-overflow-scrolling: touch;
      overflow-x: auto;

      .nav-wrapper {
        display: flex;
        flex-direction: row;
        height: 3.5rem;
      }
    }
  }
</style>