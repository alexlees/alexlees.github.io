<template>
  <v-page>
    <v-header title="登陆" @click-left="$router.back()">
      <v-icon slot="left" icon="back" :size="20" color="#38f"></v-icon>
    </v-header>
    <x-login></x-login>
  </v-page>
</template>

<script>
import Page from '@/base/Page'
import Icon from '@/base/Icon'
import Header from '@/components/Header'
import Login from './Login'
export default {
  name: 'page-login',
  components: {
    [Page.name]: Page,
    [Header.name]: Header,
    [Login.name]: Login,
    [Icon.name]: Icon
  }
}
</script>

<style>

</style>
