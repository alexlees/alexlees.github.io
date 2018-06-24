<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :class="$style.backcolor">
    <div :class="$style.comments">
      <div :class="$style.reply">
        <h3>评论·{{count}}</h3>
      </div>
      <div :class="$style.comment">
        <x-comment v-for="comment in replies" :key="comment.id" :comment="comment"></x-comment>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Comment from './comment'
export default {
  name: 'x-comments',
  components: {
    [Comment.name]: Comment
  },
  computed: {
    ...mapGetters('topic', ['replies']),
    isLoading: {
      get () {
        return this.$store.state.topic.loading
      },
      set (v) {}
    },
    count () {
      return this.replies.length
    }
  },
  methods: {
    ...mapActions('topic', ['getTopic']),
    onRefresh () {
      this.getTopic({id: this.$route.params.id})
    }
  }
}
</script>

<style module>
.reply{
  padding: 10px 0;
  background-color: #ffffff;
}
.reply > h3 {
  border-left: 5px solid #3388ff;
  font-size: 16px;
  padding: 10px;

  font-weight: bold;
}
.comment{
  padding: 0 10px;
  background-color: #ffffff;
}
.backcolor{
  background-color: #eeeeee;
}
</style>
