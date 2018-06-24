<template>
  <div :class="$style.avatar" :style="style"></div>
</template>

<script>
export default {
  name: 'v-avatar',
  props: {
    size: {
      type: Number,
      default: 40
    },
    avatar: {
      type: String,
      required: true
    }
  },
  computed: {
    style () {
      return {
        backgroundImage: `url(${this.avatar})`,
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  }
}
</script>

<style module>
.avatar{
  display: inline-block;
  background-size: cover;
  background-position: center center;
  background-color: #cccccc;
  border-radius: 50%;
}
</style>
