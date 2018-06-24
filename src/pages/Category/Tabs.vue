<template>
  <div :class="$style.tabs" class="van-hairline--bottom">
    <slot></slot>
  </div>
</template>

<script>
import Bus from './Bus.js'
export default {
  provide () {
    return {
      pushItem: this.pushItem,
      setValue: this.setValue
    }
  },
  name: 'v-tabs',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    setValue (id) {
      const value = this.items.indexOf(id)
      if (this.value === value) {
        return
      }
      this.$emit('input', value)
    },
    pushItem (uid) {
      this.items.push(uid)
    }
  },
  watch: {
    value (v, oldv) {
      if (v === oldv) {
        return
      }
      Bus.$emit('change', this.items[v])
    }
  },
  mounted () {
    Bus.$emit('change', this.items[this.value])
  },
  activated () {
    Bus.$emit('change', this.items[this.value])
  }
}
</script>

<style module>
.tabs{
  width: 100%;
  height: 46px;

  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}
</style>
