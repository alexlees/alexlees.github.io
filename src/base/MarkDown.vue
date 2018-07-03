<template>
  <div class="markdown-body" v-html="content" @click="click" ref="markdown"></div>
</template>

<script>
export default {
  name: 'v-markdown',
  props: {
    content: {
      required: true
    }
  },
  methods: {
    click (e) {
      if (e.target instanceof HTMLImageElement) {
        const images = [...this.$refs.markdown.querySelectorAll('img')]
        this.$emit('click-image', images, e.target)
      }
    }
  }
}
</script>

<style>
@import 'github-markdown-css';
.markdown-body {
  box-sizing: border-box;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 20px;
  font-size: 14px;
}
</style>
