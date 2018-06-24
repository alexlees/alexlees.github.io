<template>
  <div :class="{[$style.tabbarItem]: true, [$style.active]: active}" @click="setUid">
    <div :class="$style.icon">
      <slot name="icon" :active="active"></slot>
    </div>
    <div :class="$style.text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bus from './bus.js'
export default {
  name: 'v-tabbar-item',
  inject: ['activeColor', 'pushItem', 'setValue'],
  props: {
    to: {
      validator (v) {
        if (typeof v === 'string') {
          return true
        } else if (typeof v === 'object' && (v['path'] || v['name'])) {
          return true
        }
        return false
      }
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    setUid () {
      this.setValue(this._uid)
      if (this.to) {
        this.$router.push(this.to)
      }
    },
    change (uid) {
      if (uid === this._uid) {
        this.active = true
      } else {
        this.active = false
      }
    }
  },
  created () {
    this.pushItem(this._uid)
    Bus.$on('change', this.change)
  }
}
</script>

<style module>
.tabbarItem{
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
}
.tabbarItem:active{
  background-color: #eeeeee;
}
.icon{
  margin-top: 5px;
}
.active{
  color: #3388ff;
}
</style>
