<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <header :class="$style.notice" v-show="show">
      <slot>新增10条主题请查收！</slot>
    </header>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'x-notice-bar',
  data () {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters('home', ['page'])
  },
  watch: {
    page (v, oldv) {
      if (v !== oldv) {
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 1000)
      }
    }
  }
}
</script>

<style module>
.notice{
  /* position: relative; */
  position: absolute;
  top: 46px;
  width: 100%;
  z-index: 199;

  min-height: 30px;
  background-color: #3388ff;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
