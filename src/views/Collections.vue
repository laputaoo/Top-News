<template>
  <div class="container">
    <NewsHeader
    :from="comeFrom" 
    >{{ title }}</NewsHeader>
    <NewsList
      v-show="newsList"
      :pageData="newsList"
      :marginT="marginT"
    ></NewsList>
    <NoDataTip
      v-show="!newsList"
    ></NoDataTip>
  </div>
</template>

<script>
import NewsHeader from '../components/Header'
import NewsList from '../components/NewsList'
import NoDataTip from '../components/NoDataTip'

export default {
  name: 'Collections',
  components: {
    NewsHeader,
    NewsList,
    NoDataTip
  },
  data() {
    return {
      title: '我的收藏',
      newsList: null,
      marginT: 4.4,
      comeFrom: ''
    }
  },
  created() {
    this.getCollectedNews()
  },
  methods: {
    getCollectedNews() {
      const collectedNews = JSON.parse(localStorage.getItem('collectedNews') || '[]')
      if(collectedNews) {
        this.newsList = collectedNews
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>