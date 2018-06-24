<template>
  <div :class="$style.me">
    <v-header>{{title}}</v-header>
    <x-me></x-me>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Me from './Me'
export default {
  name: 'page-me',
  components: {
    [Header.name]: Header,
    [Me.name]: Me
  },
  computed: {
    title () {
      const name = this.$store.state.user.user.loginname
      return name || '用户中心'
    }
  }
}
</script>

<style module>
.me{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
