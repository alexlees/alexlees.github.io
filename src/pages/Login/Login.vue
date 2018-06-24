<template>
  <div :class="$style.login">
    <input type="text" v-model="value" placeholder="请输入accesstoken">
    <button @click="login">登陆</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'x-login',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    ...mapActions(['userLogin']),
    login () {
      if (this.value && this.value.length >= 10) {
        this.userLogin({
          accesstoken: this.value,
          cb: () => {
            this.$router.back()
          }
        })
      } else {
        this.$toast.fail('输入有误!')
      }
    }
  }
}
</script>

<style module>
.login{
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
