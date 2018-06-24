<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html{
  user-select: none;
  touch-action: cross-slide-x cross-slide-y;
}
#app{
  position: static;
  font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #3c3c3c;
  user-select: none;
  touch-action: manipulation;
  text-size-adjust: none;
}
</style>
