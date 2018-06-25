<template>
  <div :class="$style.page">
    <v-header :title="$route.params.name" @click-left="$router.back()">
      <v-icon slot="left" icon="back" :size="20" color="#38f"></v-icon>
    </v-header>
    <x-collect :class="$style.flex"></x-collect>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Icon from '../../base/Icon'
import Collect from './Collect'

export default {
  name: 'page-collect',
  components: {
    [Header.name]: Header,
    [Icon.name]: Icon,
    [Collect.name]: Collect
  }
}
</script>

<style module>
.page{
  display: flex;
  flex-direction: column;
}
.flex{
  flex: 1;
  background-color: #eeeeee;
}
</style>
