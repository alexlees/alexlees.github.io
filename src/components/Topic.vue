<template>
  <div :class="$style.topic">
    <v-author :author="topic.author">
      <v-tag :tag="tag" :type="type"></v-tag>
      <span>{{topic.create_at | time}}</span>
    </v-author>
    <div @click="goTopic" :class="$style.content">
      {{topic.title}}
    </div>
    <div :class="$style.footer" class="van-hairline--top">
      <div :class="$style.item" class="van-hairline--right">
        <v-icon icon="attention"></v-icon>
        <span :class="$style.space">{{topic.visit_count}}</span>
      </div>
      <div :class="$style.item" class="van-hairline--right">
        <v-icon icon="mark"></v-icon>
        <span :class="$style.space">{{topic.reply_count}}</span>
      </div>
      <div :class="$style.item">
        <v-icon icon="time"></v-icon>
        <span :class="$style.space">{{topic.last_reply_at | time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Author from './Author'
import Icon from '../base/Icon'
import Tag from '../base/Tag'
import { TABS_NAME } from '../config'
const TAGS = {
  GOOD: '精华',
  TOP: '置顶',
  ...TABS_NAME
}
export default {
  name: 'v-topic',
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
    [Tag.name]: Tag
  },
  computed: {
    tag () {
      const topic = this.topic
      if (topic.top) {
        this.type = 'top'
        return TAGS.TOP
      } else if (topic.good) {
        this.type = 'good'
        return TAGS.GOOD
      } else {
        if (TAGS[topic.tab]) {
          return TAGS[topic.tab]
        }
        return '未分类'
      }
    }
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
