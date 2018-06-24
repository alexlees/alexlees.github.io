<template>
  <div>
    <v-author :author="comment.author" @click-right="postUpReply">
      <v-icon icon="appreciate" :active="comment.is_uped"></v-icon>
      <span>{{comment.ups.length}}</span>
    </v-author>
    <v-markdown :content="comment.content"></v-markdown>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Icon from '@/base/Icon'
import Author from '@/components/Author'
import MarkDown from '@/base/MarkDown'
export default {
  name: 'x-comment',
  props: {
    comment: {
      type: Object
    }
  },
  components: {
    [Author.name]: Author,
    [Icon.name]: Icon,
    [MarkDown.name]: MarkDown
  },
  methods: {
    ...mapActions('topic', ['upReply']),
    postUpReply () {
      this.upReply({reply_id: this.comment.id})
    }
  }
}
</script>

<style module>
</style>
