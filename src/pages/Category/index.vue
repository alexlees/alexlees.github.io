<template>
  <div :class="$style.flex">
    <v-tabs v-model="active">
      <v-tab>精华</v-tab>
      <v-tab>问答</v-tab>
      <v-tab>分享</v-tab>
      <v-tab>招聘</v-tab>
      <v-tab>测试</v-tab>
    </v-tabs>
    <x-components :active="active"></x-components>
  </div>
</template>

<script>
import Tabs from './Tabs'
import Tab from './Tab'
import Components from './Components'
export default {
  name: 'page-category',
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Components.name]: Components
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style module>
.flex{
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
</style>
