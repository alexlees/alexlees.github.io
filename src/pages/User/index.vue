<template>
  <v-page>
    <v-header :title="$route.params.name" @click-left="$router.back()" @click-right="showActions">
      <v-icon icon="back" slot="left" :size="20" color="#38f"></v-icon>
      <v-icon icon="more" slot="right" :size="20" color="#38f"></v-icon>
    </v-header>
    <x-user :class="$style.flex"></x-user>
    <van-actionsheet v-model="show" :actions="actions" />
    <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
      <router-view :class="$style.page"></router-view>
    </transition>
  </v-page>
</template>

<script>
import { mapActions } from 'vuex'
import { Actionsheet } from 'vant'
import Page from '@/base/Page'
import Header from '@/components/Header'
import User from './User'
import Icon from '@/base/Icon'
export default {
  name: 'page-user',
  components: {
    [Page.name]: Page,
    [Header.name]: Header,
    [User.name]: User,
    [Icon.name]: Icon,
    [Actionsheet.name]: Actionsheet
  },
  data () {
    return {
      show: false,
      actions: [
        {
          name: '查看收藏',
          callback: this.onClick
        },
        {
          name: '查看GitHub',
          callback: this.onClick
        }
      ]
    }
  },
  methods: {
    ...mapActions('author', ['getUser']),
    showActions () {
      this.show = !this.show
    },
    onClick (e) {
      if (e.name === '查看收藏') {
        this.show = false
        this.$router.push(`${this.$route.fullPath}/collect`)
      } else {
        this.show = false
        window.location.href = `https://github.com/${this.$store.state.author.author.info.githubUsername}`
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (to.params.name !== from.params.name) {
      console.log(to, from)
      this.getUser({loginname: to.params.name})
    }
    next()
  }
}
</script>

<style module>
.flex{
  flex: 1;
}
.page{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: #ffffff;
}
</style>
