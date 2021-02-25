<template>
  <header class="header">
    <div class="icon-wrap">
      <template v-if="routeName === 'detail'|| routeName === 'collections'">
        <a @click="backTo"> 
          <img :src="require('../../assets/img/back.png')" class="img-icon"/>
        </a>
      </template>
    </div>
    <h1><slot></slot></h1>
    <div class="icon-wrap">
      <template v-if="routeName === 'home'|| routeName === 'detail'">
        <router-link to="/collections" v-if="routeName === 'home'"> 
          <img :src="require('../../assets/img/follow.png')" class="img-icon"/>
        </router-link>
        <a v-else-if="routeName === 'detail'" @click="collection"> 
          <img 
            :src="require('../../assets/img/star_o.png')" 
            class="img-icon" 
            v-show="!isFollow"
          />
          <img 
            :src="require('../../assets/img/star_full.png')" 
            class="img-icon"
            v-show="isFollow"
          />
        </a>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NewsHeader',
  created() {
    // console.log(this.$route.name)
    this.routeName = this.$route.name
    this.isFollow =this.isExist
  },
  data() {
    return {
      routeName: '',
      isFollow: false
    }
  },
  props: ['from','isExist'],
  methods: {
    backTo() {
      const path = this.from.path || '/'
      this.$router.push(path)
    },
    collection() {
      const { isFollow } = this
      this.isFollow = !isFollow
      this.$emit('doFollow', this.isFollow)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  vertical-align: center;
  width: 100%;
  height: 4.4rem;
  background-color: #cf5f55;
  color: #fff;

  h1 {
    font-size: 1.8rem;
  }

  .icon-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.4rem;
    height: 4.4rem;

    a {
      color: #fff;

      .img-icon {
        width: 2.2rem;
      }
    }

  }
}
</style>