<template>
  <div class="news-item">
    <h1>{{ item.title }}</h1>
    <div class="info">
      <span class="author">{{item.author_name}}</span>
      <span class="date">{{item.date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News0',
  props: ['item']
}
</script>

<style lang="scss" scoped>
.news-item {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 1rem .5rem 0 .5rem;
  
  h1 {
    font-size: 1.8rem;
    display: inline-block;
    margin-bottom: .5rem;;
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