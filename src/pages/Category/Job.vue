<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div @scroll="scroll" :class="$style.waper">
      <transition-group enter-active-class="animated flipInX">
        <v-topic v-for="item in job" :topic="item" :key="item.id"></v-topic>
      </transition-group>
      <v-footer></v-footer>
    </div>
  </van-pull-refresh>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Topic from '@/components/Topic'
import Footer from '@/base/Footer'

const NAME = 'v-job'
export default {
  name: NAME,
  components: {
    [Topic.name]: Topic,
    [Footer.name]: Footer
  },
  computed: {
    ...mapGetters('category', ['job']),
    isLoading: {
      get () {
        return this.$store.state.category.job.loading
      },
      set (flag) {
        this.$store.commit('category/LOADING', {tab: 'job', flag})
      }
    }
  },
  methods: {
    ...mapActions('category', ['getTopics']),
    onRefresh () {
      this.getTopics({tab: 'job'})
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
    console.log(this.job)
    if (this.job.length === 0) {
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
