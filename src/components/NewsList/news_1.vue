<template>
  <div class="news-item">
    <div class="main">
      <div class="title">
        <h1>{{item.title}}</h1>  
      </div>
      <div class="pic">
        <img :src="item.thumbnail_pic_s" class="news-thumb"/>
      </div>
    </div>
    <div class="info">
      <span class="author">{{item.author_name}}</span>
      <span class="date">{{item.date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News1',
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
    flex-direction: row;
    margin-bottom: 1rem;

    .title {
      font-size: 1.6rem;
    }

    .pic {
      background-color: #eee;

      // .news-thumb {
      //   opacity: 0;
      // }      
    }

  }


  .info {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: .5rem;

    .author, .date {
      font-size: 1.2rem;
      color: #888;
    }
  }
}
</style>