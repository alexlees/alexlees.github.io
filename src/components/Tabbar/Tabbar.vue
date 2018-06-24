<template>
  <nav :class="$style.tabbar" class="van-hairline--top">
    <slot></slot>
  </nav>
</template>

<script>
import Bus from './bus.js'
export default {
  provide () {
    return {
      activeColor: this.activeColor,
      pushItem: this.pushItem,
      setValue: this.setValue
    }
  },
  name: 'v-tabbar',
  props: {
    value: {
      type: Number,
      default: 0
    },
    activeColor: {
      type: String,
      default: '#38f'
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
  }
}
</script>

<style module>
.tabbar{
  width: 100%;
  height: 50px;

  position: relative;
  z-index: 99;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}
</style>
