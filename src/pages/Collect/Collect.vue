<template>
  <div :class="$style.collect">
    <div v-if="collects.length === 0" :class="$style.info">
      还没有收藏！
    </div>
    <div v-else>
      <v-topic v-for="(item, index) in collects" :key="index" :topic="item"></v-topic>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Topic from '../../components/Topic'
export default {
  name: 'x-collect',
  components: {
    [Topic.name]: Topic
  },
  computed: {
    ...mapGetters('author', ['collects'])
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
