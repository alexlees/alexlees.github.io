<template>
  <div :class="$style.topic">
    <h3 :class="$style.title">{{topic.title}}</h3>
    <v-markdown :content="topic.content" @click-image="goImage"></v-markdown>
    <footer :class="$style.time" @click="changeTime">
      {{text}}:{{currentTime | time}}
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MarkDown from '@/base/MarkDown'

export default {
  name: 'x-topic',
  components: {
    [MarkDown.name]: MarkDown
  },
  data () {
    return {
      createTime: true
    }
  },
  computed: {
    ...mapGetters('topic', ['topic']),
    text () {
      if (this.createTime) {
        return '创建于'
      }
      return '最近评论'
    },
    currentTime () {
      if (this.createTime) {
        return this.topic.create_at
      }
      return this.topic.last_reply_at
    }
  },
  methods: {
    changeTime () {
      this.createTime = !this.createTime
    },
    goImage () {
      // this.$router.push(`${this.$route.fullPath}/image`)
      this.$toast.fail('图片功能待完成')
    }
  }
}
</script>

<style module>
.topic{
  min-height: calc(100vh - 96px);
  background-color: #ffffff;
}
.title{
  background-color: #ffffff;
  border-left: 5px solid #3388ff;
  font-size: 16px;
  padding: 10px;
  font-weight: bold;
}
.time{
  min-height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: #888;
  text-align: center;
}
</style>
