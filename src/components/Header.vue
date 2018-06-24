<template>
  <header :class="$style.header" class="van-hairline--bottom">
    <div :class="$style.slot" @click="$emit('click-left')">
      <slot name="left"></slot>
    </div>
    <div :class="$style.title" class="van-ellipsis">
      <slot>{{title}}</slot>
    </div>
    <div :class="$style.slot" @click="$emit('click-right')">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-header',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style module>
.header{
  height: 46px;
  background-color: #ffffff;
  font-size: 16px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  box-shadow: 0 0 10px 0 #888;
  position: relative;
  z-index: 1;
}
.slot{
  width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.title{
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
