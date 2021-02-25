<template>
  <div class="news-item">
    <div class="main">
      <div class="title">
        <h1>{{item.title}}</h1>  
      </div>
      <div class="pic">
        <div class="img">
          <img :src="item.thumbnail_pic_s" class="news-thumb"/>        
        </div>
        <div class="img">
          <img :src="item.thumbnail_pic_s02" class="news-thumb"/>
        </div>
        <div class="img last">
          <img :src="item.thumbnail_pic_s03" class="news-thumb"/>
        </div>
      </div>
    </div>
    <div class="info">
      <span>{{item.author_name}}</span>
      <span>{{item.date}}</span>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'News3',
  props: ['item']
}
</script>

<style lang="scss" scoped>
.news-item {
  display: flex;
  flex-direction: column;
  margin: 1rem .5rem 0 .5rem;

  .main {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    .title {
      font-size: 1.6rem;
      display: inline-block;
      margin-bottom: 1rem;;
    }

    .pic {
      display: flex;
      flex-direction: row;

      .img {
        width: 33.33%;
        flex: 1 1 auto;
        margin-right: .5rem;
        font-size: 0;
        background-color: #eee;

        &.last {
          margin: 0;
        }

        // .news-thumb {
        //   opacity: 0;
        // }
      }
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    color: #888;
    margin-bottom: .5rem;
  }
}
</style>