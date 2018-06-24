<template>
  <v-header @click-right="topicCollect" @click-left="$router.go(-1)">
    <v-icon icon="back" :size="20" color="#38f" slot="left"></v-icon>
    <div @click="goUser" :class="$style.author">
      <v-avatar :avatar="avatar"></v-avatar>
      <span :class="$style.indent">{{name}}</span>
    </div>
    <v-icon icon="favor" :size="20" :active="collect" slot="right"></v-icon>
  </v-header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Icon from '@/base/Icon'
import Header from '@/components/Header'
import Avatar from '@/components/Avatar'
export default {
  name: 'x-header',
  components: {
    [Header.name]: Header,
    [Avatar.name]: Avatar,
    [Icon.name]: Icon
  },
  methods: {
    ...mapActions('topic', ['topicCollect']),
    goUser () {
      const name = this.name
      if (name) {
        this.$router.push(`/user/${name}`)
      }
    }
  },
  computed: {
    ...mapGetters('topic', ['author', 'collect']),
    avatar () {
      if (this.author) {
        return this.author.avatar_url
      } else {
        return ''
      }
    },
    name () {
      if (this.author) {
        return this.author.loginname
      } else {
        return ''
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(to, from)
    next()
  }
}
</script>

<style module>
.author{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.indent{
  text-indent: 1em;
}
</style>
