<template>
  <van-pull-refresh v-model="isLoading" @refresh="getTopics">
    <div :class="$style.waper">
      <transition-group enter-active-class="animated flipInX">
        <v-topic v-for="item in topics" :topic="item" :key="item.id"></v-topic>
      </transition-group>
      <v-footer></v-footer>
    </div>
  </van-pull-refresh>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Topic from '@/components/Topic'
import Footer from '@/base/Footer'
export const name = 'v-topics'

export default {
  name,
  methods: {
    ...mapActions('home', ['getTopics'])
  },
  components: {
    [Topic.name]: Topic,
    [Footer.name]: Footer
  },
  computed: {
    ...mapGetters('home', ['topics']),
    isLoading: {
      get () {
        return this.$store.state.home.loading
      },
      set (value) {
        this.$store.commit('home/LOADING', value)
      }
    }
  },
  created () {
    if (this.topics.length === 0) {
      // 初始化
      this.getTopics(true)
    }
  }
}
</script>

<style module>
.waper{
  min-height: calc(100vh - 96px);
}
</style>
