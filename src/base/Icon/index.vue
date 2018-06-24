<template>
  <i :class="['iconfont', iconClass]" :style="{fontSize: size + 'px', color}"></i>
</template>

<script>
const prefix = 'icon-'
const activFix = 'fill'
export default {
  name: 'v-icon',
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: 'inherit'
    },
    active: {
      type: Boolean,
      default: false
    },
    activeIcon: {
      type: String
    }
  },
  computed: {
    iconClass () {
      let icon = ''
      if (this.icon.indexOf(prefix) === -1) {
        icon += prefix
      }
      icon += this.icon
      if (this.active) {
        icon += activFix
      }
      return icon
    }
  }
}
</script>

<style>
@import '//at.alicdn.com/t/font_686486_f3oo2lhfu8q.css';
.iconfont{
  font-weight: inherit;
  font-size: inherit;
}
</style>
