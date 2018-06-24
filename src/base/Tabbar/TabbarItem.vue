<template>
  <router-link :to="to" tag="div" exact :class="$style.tabbarItem" :exact-active-class="$style.active">
    <div :class="$style.icon">
      <slot name="icon" :active="active"></slot>
    </div>
    <div :class="$style.text">
      <slot></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'v-tabbar-item',
  inject: ['setItem'],
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
    check () {
      if (this.setItem && typeof this.setItem === 'function') {
        // Nothing
      } else {
        console.error('tabbar-item 只能出现在tabbar组件内')
      }
    },
    setActive (path) {
      if (path === this.to) {
        this.active = true
      } else {
        this.active = false
      }
    }
  },
  created () {
    this.check()
    this.setActive(this.$route.fullPath)
  },
  watch: {
    $route (v) {
      this.setActive(v.fullPath)
    }
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
