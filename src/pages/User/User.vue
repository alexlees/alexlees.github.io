<template>
  <div :class="$style.waper">
    <div :class="$style.me" :style="style">
      <v-avatar :avatar="info.avatar_url || '' " :size="80"></v-avatar>
    </div>
    <v-tabs v-model="active">
      <v-tab>最近主题</v-tab>
      <v-tab>最近评论</v-tab>
    </v-tabs>
    <div :class="$style.flex">
      <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <component :is="is"></component>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import bac from './bck.png'
import Avatar from '../../components/Avatar'
import Tabs from '../Category/Tabs'
import Tab from '../Category/Tab'
import Replys from './Replys'
import Topics from './Topics'

const components = [Replys, Topics]
export default {
  name: 'x-user',
  components: {
    [Avatar.name]: Avatar,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab
  },
  data () {
    return {
      active: 0
    }
  },
  computed: {
    ...mapGetters('author', ['info']),
    loading: {
      get () {
        return this.$store.state.author.loading
      },
      set (v) {
        console.log(v)
      }
    },
    style () {
      return {
        backgroundImage: `url(${bac})`
      }
    },
    is () {
      return components[this.active]
    }
  },
  methods: {
    ...mapActions('author', ['getUser']),
    onRefresh () {
      this.getUser({loginname: this.$route.params.name})
    },
    shouldRefresh (falg) {
      if (falg) {
        return this.onRefresh()
      }
      if (this.info.loginname !== this.$route.params.name) {
        this.onRefresh()
      }
    }
  },
  created () {
    this.shouldRefresh()
  }
}
</script>

<style module>
.me{
  width: 375px;
  height: 187px;
  background-color: #ffffff;
  background-size: cover;
  background-position: center center;

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.action{
  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;
}
.waper{
  overflow: hidden;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.flex{
  flex: 1;
  overflow-y: scroll;
}
</style>
