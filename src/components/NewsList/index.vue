<template>
  <div class="news-list" :style="{ marginTop: marginT + 'rem'}">
    <div
      v-for="(item, index) in pageData"
      :key="index"
      @click="goToDetail(item)"  
    >
      <News0
        v-if="!item.thumbnail_pic_s"
        :item = "item"
      >
      </News0>
      <News1
        v-if="item.thumbnail_pic_s && !item.thumbnail_pic_s02"
        :item = "item"
      >
      </News1>  
      <News2
        v-if="item.thumbnail_pic_s02 && !item.thumbnail_pic_s03"
        :item = "item"
      >
      </News2>
      <News3
        v-if="item.thumbnail_pic_s03"
        :item = "item"
      >
      </News3>
    </div>

  </div>
</template>

<script>
import News0 from './news_0'
import News1 from './news_1'
import News2 from './news_2'
import News3 from './news_3'

export default {
  name: 'NewsList',
  props: ['pageData','marginT'],
  components: {
    News0, 
    News1,
    News2,
    News3
  },
  methods: {
    goToDetail(item) {
      const url = item.url
      window.localStorage.setItem('currentNews', JSON.stringify(item))
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="scss" scoped>
.news-list {
  margin-top: 8.2rem;
  width: 100%;
  background-color: #fff;
}
</style>