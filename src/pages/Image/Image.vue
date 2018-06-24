<template>
  <div v-html="images.join('')" :class="$style.image">

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'x-image',
  computed: {
    ...mapGetters('topic', ['images'])
  }
}
</script>

<style module>
.image > img {
  width: 100%;
}
</style>
