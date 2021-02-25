<template>
  <div class="container">
    <news-header>{{title}}</news-header>
    <nav-bar/>
    <news-list
      :pageData = 'pageData'
      v-show="!isLoading"
      :marginT="marginT"  
    />
    <MoreLoading :hasMore="hasMore" v-if="isMoreLoading"/>
    <PageLoading v-show="isLoading"/>
  </div>
</template>

<script>
import getData from '../services/index'
import { scrollToBottom, scrollToTop } from '../libs/utils'

import NewsHeader from '../components/Header'
import NavBar from '../components/NavBar'
import NewsList from '../components/NewsList'
import PageLoading from '../components/PageLoading'
import MoreLoading from '../components/MoreLoading'

import { mapState } from 'vuex'


export default {
  name: 'Home',
  data() {
    return {
      title: '新闻头条',
      pageData: [],
      newsCache: {},
      pageNum: 0,
      isLoading: false,
      isMoreLoading: false,
      hasMore: true,
      marginT: 8.2
    }
  },
  async mounted() {
    await this.getNewsList()
    scrollToTop()

    window.addEventListener('scroll',scrollToBottom.bind(this, this.getMoreNews),false)
  },
  computed: {
    ...mapState(['type'])
  },
  watch: {
    type: function () {
      this.isMoreLoading = false
      this.pageNum = 0
      this.hasMore = true
      this.isLoading = true
      scrollToTop()
      if(this.newsCache[this.type]) {//如果缓存池中有该类型的新闻
        // console.log(this.newsCache)
        this.pageData = this.newsCache[this.type][this.pageNum]
        this.isLoading = false
      }else {//若没有该类型的新闻
        this.getNewsList() 
      }
    }
  },
  methods: {
    async getNewsList() {
      const data =await getData(this.type)
      this.pageData = data.pageData[this.pageNum]
      this.newsCache[this.type] = data.pageData
      this.isLoading = false
    },
    getMoreNews() {//滚动条到底了
      if(!this.isMoreLoading) {
        this.isMoreLoading = true 
        this.pageNum ++
        this.allowGetMore = true
        const len = this.newsCache[this.type].length
        if(this.pageNum > len - 1) {//表示最后一页
          this.hasMore = false        
        } else {
          this.hasMore = true
          setTimeout(()=> {
            this.isMoreLoading = false           
            this.pageData = this.pageData.concat(this.newsCache[this.type][this.pageNum])  
          },300)          
        }                   
      }  
    }
  },
  components: {
    NewsHeader,
    NavBar,
    NewsList,
    PageLoading,
    MoreLoading
  }
}
</script>

<style lang="scss" scoped>

</style>