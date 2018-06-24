<template>
  <v-page>
    <x-header></x-header>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :class="$style.content">
      <div :class="$style.waper">
        <x-topic></x-topic>
      </div>
    </van-pull-refresh>
    <x-reply></x-reply>
    <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
      <router-view :class="$style.page"></router-view>
    </transition>
  </v-page>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Page from '@/base/Page'
import Header from './Header'
import Topic from './Topic'
import Reply from './Reply'
export default {
  name: 'page-topic',
  components: {
    [Page.name]: Page,
    [Header.name]: Header,
    [Topic.name]: Topic,
    [Reply.name]: Reply
  },
  computed: {
    isLoading: {
      get () {
        return this.$store.state.topic.loading
      },
      set (value) {
        this.LOADING(value)
        return value
      }
    }
  },
  methods: {
    ...mapActions('topic', ['getTopic', 'deleteTopic']),
    ...mapMutations('topic', ['LOADING']),
    onRefresh () {
      console.log('onRefresh')
      this.getTopic({id: this.$route.params.id})
    },
    goReply () {
      this.$router.push(this.$route.fullPath + '/reply')
    }
  },
  destroyed () {
    this.deleteTopic()
  },
  created () {
    if (this.topic && this.topic.id === this.$route.params.id) {
      //
    } else {
      this.onRefresh()
    }
  }
}
</script>

<style module>
.content{
  flex: 1;
  overflow-y: scroll;
  background-color: #eeeeee;
}
.reply{
  height: 50px;
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
