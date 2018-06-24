<template>
  <div :class="$style.page">
    <v-tabs v-model="active">
      <v-tab>未读消息</v-tab>
      <v-tab>已读消息</v-tab>
    </v-tabs>
    <div :class="$style.flex">
      <x-message v-model="active"></x-message>
    </div>
  </div>
</template>

<script>
import Tabs from '../Category/Tabs'
import Tab from '../Category/Tab'
import Message from './Message'
export default {
  name: 'page-message',
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Message.name]: Message
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style module>
.page{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  overflow: hidden;
}
.flex{
  flex: 1;
  overflow-y: auto;
}
</style>
