<template>
  <div>
    <div v-if="none.length === 0" :class="$style.center">
      没有消息？看看已读消息吧！
    </div>
    <div v-else>
      <x-topic v-for="(item, index) in none" :topic="item" :key="index"></x-topic>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Topic from './Topic'
export default {
  name: 'x-none',
  components: {
    [Topic.name]: Topic
  },
  computed: {
    ...mapGetters('message', ['none'])
  }
}
</script>

<style module>
.center{
  width: 100%;
  min-height: 300px;
  text-align: center;
  line-height: 300px;
  color: #888;
}
</style>
