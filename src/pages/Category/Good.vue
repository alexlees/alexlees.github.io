<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div @scroll="scroll" :class="$style.waper">
      <transition-group enter-active-class="animated flipInX">
        <v-topic v-for="item in good" :topic="item" :key="item.id"></v-topic>
      </transition-group>
      <v-footer></v-footer>
    </div>
  </van-pull-refresh>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Topic from '@/components/Topic'
import Footer from '@/base/Footer'

const NAME = 'v-good'
export default {
  name: NAME,
  components: {
    [Topic.name]: Topic,
    [Footer.name]: Footer
  },
  computed: {
    ...mapGetters('category', ['good']),
    isLoading: {
      get () {
        return this.$store.state.category.good.loading
      },
      set (flag) {
        this.$store.commit('category/LOADING', {tab: 'good', flag})
      }
    }
  },
  methods: {
    ...mapActions('category', ['getTopics']),
    onRefresh () {
      this.getTopics({tab: 'good'})
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
    scroll (e) {
    }
  },
  created () {
    if (this.good.length === 0) {
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
