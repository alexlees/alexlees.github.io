<template>
  <div>
    <div>
      <v-topic v-for="(item, index) in info.recent_topics" :key="index" :topic="item"></v-topic>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Topic from './UserTopic'
export default {
  name: 'x-topics',
  components: {
    [Topic.name]: Topic
  },
  computed: {
    ...mapGetters('author', ['info'])
  }
}
</script>

<style>

</style>
