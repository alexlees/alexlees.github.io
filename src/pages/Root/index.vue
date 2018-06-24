<template>
  <div :class="$style.page">
    <div :class="$style.router">
      <keep-alive>
        <router-view :class="$style.flex"></router-view>
      </keep-alive>
    </div>
    <v-tabbar>
      <v-tabbar-item to="/">
        <template slot="icon" slot-scope="props">
          <v-icon icon="home" :active="props.active"></v-icon>
        </template>
        <span>首页</span>
      </v-tabbar-item>
      <v-tabbar-item to="/category">
        <template slot="icon" slot-scope="props">
          <v-icon icon="cart" :active="props.active"></v-icon>
        </template>
        <span>分类</span>
      </v-tabbar-item>
      <v-tabbar-item to="/message">
        <template slot="icon" slot-scope="props">
          <v-icon icon="mark" :active="props.active"></v-icon>
        </template>
        <span>消息</span>
      </v-tabbar-item>
      <v-tabbar-item to="/me">
        <template slot="icon" slot-scope="props">
          <v-icon icon="my" :active="props.active"></v-icon>
        </template>
        <span>我的</span>
      </v-tabbar-item>
    </v-tabbar>
  </div>
</template>

<script>
import Tabbar from '@/base/Tabbar/Tabbar'
import TabbarItem from '@/base/Tabbar/TabbarItem'
import Icon from '@/base/Icon'

export default {
  name: 'page-root',
  components: {
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style module>
.page{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
}
.router{
  flex: 1;
  display: flex;
  background-color: #eeeeee;
}
.flex{
  flex: 1;
  display: flex;
}
</style>
