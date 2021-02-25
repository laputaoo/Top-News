<template>
  <div 
    :class="['nav-item', {'active' : item.type === type}]"
    @click="setType(item.type)"
  >
    {{ item.title }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavItem',
  props: {
    item: Object
  },
  computed: {
    ...mapState(['type'])
  },
  methods: {
    setType(type) {
      this.$store.dispatch('setType', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  font-size: 1.6rem;
  
  &.active {
    color: #ec7a70
  }
}
</style>