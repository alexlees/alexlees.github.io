<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div @scroll="scroll" :class="$style.waper">
      <transition-group enter-active-class="animated flipInX">
        <v-topic v-for="item in dev" :topic="item" :key="item.id"></v-topic>
      </transition-group>
      <v-footer></v-footer>
    </div>
  </van-pull-refresh>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Topic from '@/components/Topic'
import Footer from '@/base/Footer'

const NAME = 'v-dev'
export default {
  name: NAME,
  components: {
    [Topic.name]: Topic,
    [Footer.name]: Footer
  },
  computed: {
    ...mapGetters('category', ['dev']),
    isLoading: {
      get () {
        return this.$store.state.category.dev.loading
      },
      set (flag) {
        this.$store.commit('category/LOADING', {tab: 'dev', flag})
      }
    }
  },
  methods: {
    ...mapActions('category', ['getTopics']),
    onRefresh () {
      this.getTopics({tab: 'dev'})
      console.log(this.$store.state.category)
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
    scroll (e) {
      console.log(e)
    }
  },
  created () {
    console.log(this.dev)
    if (this.dev.length === 0) {
      this.onRefresh()
    }
  }
}
</script>

<style module>
.waper{
  overflow-y: scroll;
}
</style>
