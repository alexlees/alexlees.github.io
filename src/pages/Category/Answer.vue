<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div @scroll="scroll" :class="$style.waper">
      <transition-group enter-active-class="animated flipInX">
        <v-topic v-for="item in ask" :topic="item" :key="item.id"></v-topic>
      </transition-group>
      <v-footer></v-footer>
    </div>
  </van-pull-refresh>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Topic from '@/components/Topic'
import Footer from '@/base/Footer'

const NAME = 'v-ask'
export default {
  name: NAME,
  components: {
    [Topic.name]: Topic,
    [Footer.name]: Footer
  },
  computed: {
    ...mapGetters('category', ['ask']),
    isLoading: {
      get () {
        return this.$store.state.category.ask.loading
      },
      set (flag) {
        this.$store.commit('category/LOADING', {tab: 'ask', flag})
      }
    }
  },
  methods: {
    ...mapActions('category', ['getTopics']),
    onRefresh () {
      this.getTopics({tab: 'ask'})
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
    console.log(this.ask)
    if (this.ask.length === 0) {
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
