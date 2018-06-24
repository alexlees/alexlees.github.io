<template>
  <nav :class="$style.tabbar" class="van-hairline--top">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  provide () {
    return {
      setItem: this.setItem
    }
  },
  name: 'v-tabbar',
  data () {
    return {
      index: 1
    }
  },
  methods: {
    setItem (v) {
      console.log(v)
    }
  }
}
</script>

<style module>
.tabbar{
  width: 100%;
  height: 50px;

  position: relative;
  z-index: 99;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}
</style>
