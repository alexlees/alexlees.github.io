<template>
  <div :class="$style.author" >
    <div :class="$style.name" @click="goUser">
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
import { mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions('author', ['getUser']),
    goUser (e) {
      this.getUser({loginname: this.author.loginname, path: `/user/${this.author.loginname}`})
    }
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
  align-items: center;
}
.right{
  min-width: 50px;
}
.name{
  flex: 1;
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-indent: 1em;
}
</style>
