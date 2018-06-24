<template>
  <div>
    <x-topic v-for="(item, index) in read" :topic="item" :key="index"></x-topic>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Topic from './Topic'
export default {
  name: 'x-has',
  components: {
    [Topic.name]: Topic
  },
  computed: {
    ...mapGetters('message', ['read'])
  }
}
</script>

<style>
</style>
