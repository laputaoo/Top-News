<template>
  <div class="container">
    <NewsHeader 
      :from="comeFrom" 
      @doFollow="doFollow"
      :isExist="isExist"
    >{{ title }}</NewsHeader>
    <NewsFrame :url='currentNews.url'></NewsFrame>
  </div>
</template>

<script>
import NewsHeader from '../components/Header'
import NewsFrame from '../components/Iframe'

export default {
  name: 'Detail',
  components: {
    NewsFrame,
    NewsHeader
  },
  data() {
    return {
      title: '新闻详情',
      comeFrom: '',
      currentNews: '',
      isExist: false
    }
  },
  created() {
    this.currentNews =JSON.parse(window.localStorage.getItem('currentNews')) 
    this.upDateIcon()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.comeFrom = from
    })
  },
  methods: {
    doFollow(isFollow) {
      const {currentNews} = this
      let collectedNews = JSON.parse(localStorage.getItem('collectedNews') || '[]')
      if(isFollow) {
        collectedNews.push(currentNews)
      }else {
        collectedNews = collectedNews.filter(item => item.uniquekey !== currentNews.uniquekey)
      }
      localStorage.setItem('collectedNews', JSON.stringify(collectedNews))
    },
    upDateIcon() {
      const {currentNews} = this
      let collectedNews = JSON.parse(localStorage.getItem('collectedNews') || '[]')  
      this.isExist = collectedNews.find(item => item.uniquekey === currentNews.uniquekey)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
  }
</style>