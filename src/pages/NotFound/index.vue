<template>
  <div :class="$style.notfound">
    <v-header @click-left="$router.back()">
      <v-icon icon="back" :size="20" slot="left" color="#38f"></v-icon>
      <span>404</span>
    </v-header>
    <div :class="$style.info">
      你来到了无人之地，点击左上角返回上一页!
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
export default {
  name: 'page-notfound',
  components: {
    [Header.name]: Header
  }
}
</script>

<style module>
.notfound{
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
}
.info{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  color: #888;
}
</style>
