<template>
  <div :class="{[$style.tab]: true, [$style.active]: active}" @click="setUid">
    <slot>{{title}}</slot>
  </div>
</template>

<script>
import Bus from './Bus.js'
export default {
  inject: ['pushItem', 'setValue'],
  name: 'v-tab',
  props: {
    title: String
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    setUid () {
      this.setValue(this._uid)
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
.tab{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  cursor: pointer;
}
.tab:active{
  background-color: #eeeeee;
}
.active{
  position: relative;
  color: #108ee9;
}
.active::after{
  display: block;
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;

  height: 3px;
  background-color: #108ee9;
}
</style>
