<template>
  <div :class="$style.page">
    <v-header @click-left="$router.back()">
      <span>图片</span>
      <v-icon slot="left" icon="back" :style="{color: '#38f'}" :size="20"></v-icon>
    </v-header>
    <div :class="$style.flex">
      <x-image></x-image>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Icon from '@/base/Icon'
import Image from './Image'
export default {
  name: 'page-image',
  components: {
    [Header.name]: Header,
    [Icon.name]: Icon,
    [Image.name]: Image
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style module>
.page{
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
