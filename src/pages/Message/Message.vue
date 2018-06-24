<template>
  <van-pull-refresh v-model="loading" @refresh="getMessage">
    <div :class="$style.waper">
      <div v-if="needLogin" :class="$style.notoken">
        <span>未登录点击 <router-link to="/login">登陆</router-link></span>
      </div>
      <keep-alive v-else>
        <component :is="is"></component>
      </keep-alive>
    </div>
  </van-pull-refresh>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
const HasRead = () => import('./HasRead.vue')
const NoneRead = () => import('./NoneRead.vue')
const components = [NoneRead, HasRead]
export default {
  name: 'x-message',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  components: {
    HasRead,
    NoneRead
  },
  computed: {
    ...mapGetters(['needLogin']),
    ...mapGetters('message', ['loading']),
    is () {
      return components[this.value]
    },
    loading: {
      get () {
        return this.$store.state.message.loading
      },
      set (v) {
      }
    }
  },
  methods: {
    ...mapActions('message', ['getMessage'])
  },
  created () {
    if (this.needLogin) {
      return
    }
    this.getMessage()
  }
}
</script>

<style module>
.notoken{
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.waper{
  min-height: calc(100vh - 96px);
}
</style>
