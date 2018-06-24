<template>
  <div :class="$style.topic">
    <v-author :author="topic.author">
      <span>{{topic.last_reply_at | time}}</span>
    </v-author>
    <div @click="goTopic" :class="$style.content">
      {{topic.title}}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Author from '@/components/Author'

export default {
  name: 'v-topic',
  props: {
    topic: {
      type: Object,
      required: true
    }
  },
  components: {
    [Author.name]: Author
  },
  methods: {
    ...mapActions('topic', ['getTopic']),
    goTopic () {
      this.getTopic({id: this.topic.id, path: `/topic/${this.topic.id}`})
    }
  }
}
</script>

<style module>
.topic{
  width: 100%;
  min-height: 140px;
  box-sizing: border-box;
  padding: 10px 10px 0;
  margin-bottom: 20px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  box-shadow: 0 0 10px 0 #cccccc;
}
.content{
  flex: 1;
  padding: 20px;
  line-height: 120%;
}
</style>
