<template>
  <v-page>
    <v-header>登陆</v-header>
    <x-login></x-login>
  </v-page>
</template>

<script>
import Page from '@/base/Page'
import Header from '@/components/Header'
import Login from './Login'
export default {
  name: 'page-login',
  components: {
    [Page.name]: Page,
    [Header.name]: Header,
    [Login.name]: Login
  }
}
</script>

<style>

</style>
