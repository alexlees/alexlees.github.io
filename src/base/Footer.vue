<template>
  <footer :class="$style.footer" @click="scrollTop">
    <slot>回到顶部。下拉刷新！</slot>
  </footer>
</template>

<script>
export default {
  inject: ['scrollTop'],
  name: 'v-footer'
}
</script>

<style module>
.footer{
  width: 100%;
  min-height: 46px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #eeeeee;
  color: #888888;
}
</style>
