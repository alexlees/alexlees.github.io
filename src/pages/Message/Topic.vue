<template>
  <div :class="$style.topic">
    <v-author :author="topic.author">
      <v-tag :tag="tag" :type="type"></v-tag>
    </v-author>
    <v-markdown @click.native="goTopic" :class="$style.content" :content="topic.reply.content">
    </v-markdown>
    <div :class="$style.footer" class="van-hairline--top">
      <div :class="$style.item" class="van-hairline--right">
        <v-icon icon="attention"></v-icon>
      </div>
      <div :class="$style.item" class="van-hairline--right">
        <v-icon icon="appreciate"></v-icon>
        <span :class="$style.space">{{topic.reply.ups.length}}</span>
      </div>
      <div :class="$style.item">
        <v-icon icon="time"></v-icon>
        <span :class="$style.space">{{topic.reply.create_at | time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Author from '@/components/Author'
import Icon from '@/base/Icon'
import Tag from '@/base/Tag'
import MarkDown from '@/base/MarkDown'

export default {
  name: 'x-topic',
  props: {
    topic: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      type: 'default'
    }
  },
  components: {
    [Author.name]: Author,
    [Icon.name]: Icon,
    [Tag.name]: Tag,
    [MarkDown.name]: MarkDown
  },
  computed: {
    tag () {
      return this.topic.type === 'at' ? '@' : '回复'
    }
  },
  methods: {
    ...mapActions('topic', ['getTopic']),
    goTopic () {
      this.getTopic({id: this.topic.topic.id, path: `/topic/${this.topic.topic.id}`})
    }
  }
}
</script>

<style module>
.topic{
  width: 100%;
  min-height: 180px;
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
.footer{
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}
.item{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.space{
  text-indent: 5px;
}
</style>
