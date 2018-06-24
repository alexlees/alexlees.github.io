<template>
  <div :class="$style.flex">
    <v-header title="CNode.js中文社区" @click-right="goGithub">
      <v-icon icon="github" slot="right" color="#38f" :size="20"></v-icon>
    </v-header>
    <x-notice-bar></x-notice-bar>
    <div :class="$style.container" @scroll="scroll">
      <v-topics></v-topics>
    </div>
  </div>
</template>

<script>
import {name} from './topics'
import NoticeBar from './NoticeBar'
import Icon from '@/base/Icon'
import Header from '@/components/Header'
const Topic = () => import('./topics')
export default {
  provide () {
    return {
      scrollTop: this.scrollTop
    }
  },
  name: 'page-home',
  components: {
    [name]: Topic,
    [Icon.name]: Icon,
    [Header.name]: Header,
    [NoticeBar.name]: NoticeBar
  },
  data () {
    return {
      target: null,
      scrollY: 0
    }
  },
  methods: {
    goGithub () {
      window.location.href = 'https://github.com/alexlees/alexlees.github.io'
    },
    scroll (e) {
      if (!this.target) {
        this.target = e.target
      }
      this.scrollY = this.target.scrollTop
    },
    scrollTop () {
      if (this.target) {
        this.target.scroll(0, 0)
      }
    },
    scrollHistroy () {
      if (this.target) {
        this.target.scroll(0, this.scrollY)
      }
    }
  },
  activated () {
    this.scrollHistroy()
  }
}
</script>

<style module>
.flex{
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
.container{
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
