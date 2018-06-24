<template>
  <span :class="$style.tag" :style="style">
    {{tag}}
  </span>
</template>

<script>
const TYPES = {
  default: '#666',
  top: '#f85',
  good: '#38f'
}
export default {
  name: 'v-tag',
  props: {
    tag: {
      type: String
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    style () {
      return {
        backgroundColor: TYPES[this.type]
      }
    }
  }
}
</script>

<style module>
.tag{
  display: inline-flex;
  padding: 5px;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 2px;
}
</style>
