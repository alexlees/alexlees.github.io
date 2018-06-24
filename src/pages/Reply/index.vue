<template>
  <div :class="$style.comments">
    <v-header @click-left="$router.back()">
      <span>评论</span>
      <v-icon slot="left" icon="back" :style="{color: '#38f'}" :size="20"></v-icon>
    </v-header>
    <div :class="$style.flex">
      <x-comments></x-comments>
    </div>
    <x-reply></x-reply>
  </div>
</template>

<script>
import Comments from './comments'
import Header from '@/components/Header'
import Icon from '@/base/Icon'
import Reply from './Reply'
export default {
  name: 'page-reply',
  components: {
    [Comments.name]: Comments,
    [Header.name]: Header,
    [Icon.name]: Icon,
    [Reply.name]: Reply
  }
}
</script>

<style module>
.comments{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
}
.flex{
  flex: 1;
  overflow: scroll;
}
</style>
