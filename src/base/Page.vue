<template>
  <div :class="$style.page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-page'
}
</script>

<style module>
.page{
  width: 100%;
  height: 100%;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  align-items: stretch;
}
</style>
