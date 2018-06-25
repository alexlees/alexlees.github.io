<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh" :class="$style.collect">
    <div>
      <div v-if="collects.length === 0" :class="$style.info">
        还没有收藏！
      </div>
      <div v-else>
        <v-topic v-for="(item, index) in collects" :key="index" :topic="item"></v-topic>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Topic from '../../components/Topic'
export default {
  name: 'x-collect',
  components: {
    [Topic.name]: Topic
  },
  computed: {
    ...mapGetters('author', ['collects']),
    loading: {
      get () {
        return this.$store.state.author.loading
      },
      set (v) {
        console.log(v)
      }
    }
  },
  methods: {
    ...mapActions('author', ['getCollect']),
    onRefresh () {
      this.getCollect({loginname: this.$route.params.name})
    }
  },
  created () {
    this.onRefresh()
  }
}
</script>

<style module>
.collect{
  overflow-y: scroll;
}
.info{
  min-height: 300px;
  color: #888;
  text-align: center;
  line-height: 300px;
}
</style>
