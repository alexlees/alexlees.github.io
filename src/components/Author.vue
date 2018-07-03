<template>
  <div :class="$style.author" >
    <div :class="$style.name" @click="$router.push(`/user/${author.loginname}`)">
      <v-avatar :avatar="author.avatar_url"></v-avatar>
      <span>{{author.loginname}}</span>
    </div>
    <div :class="$style.right" @click="$emit('click-right')" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar'
export default {
  name: 'v-author',
  props: {
    author: {
      type: Object,
      required: true
    }
  },
  components: {
    [Avatar.name]: Avatar
  }
}
</script>

<style module>
.author{
  width: 100%;
  height: 46px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}
.right{
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.right:active{
  background-color: #eeeeee;
  color: #888;
}
.name{
  flex: 1;
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-indent: 1em;
}
.name:active{
  color: #888;
  background-color: #eeeeee;
}
</style>
