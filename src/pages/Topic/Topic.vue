<template>
  <div :class="$style.topic">
    <h3 :class="$style.title">{{topic.title}}</h3>
    <v-markdown :content="topic.content" @click-image="showImages"></v-markdown>
    <footer :class="$style.time" @click="changeTime">
      {{text}}:{{currentTime | time}}
    </footer>
  </div>
</template>

<script>
/* global PhotoSwipeUI_Default:true PhotoSwipe: true */
import { mapGetters } from 'vuex'
import MarkDown from '@/base/MarkDown'

export default {
  name: 'x-topic',
  components: {
    [MarkDown.name]: MarkDown
  },
  data () {
    return {
      createTime: true,
      pswpElement: null
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
    showImages (images, target) {
      if (!this.pswpElement) {
        this.pswpElement = document.getElementById('pswp')
      }
      let index = 1

      const items = images.map((image, i) => {
        if (target === image) {
          index = i
        }
        return {
          src: image.src,
          w: window.screen.availWidth,
          h: image.height * (window.screen.availWidth / image.width)
        }
      })
      const options = {
        index,
        loop: false
      }
      const gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, items, options)
      gallery.init()
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
