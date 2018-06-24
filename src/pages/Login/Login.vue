<template>
  <div :class="$style.login">
    <div :class="$style.form">
      <van-field v-model="value" placeholder="请输入Access Token" />
      <van-button @click="login" size="large" type="primary" :style="{margin: '10px auto'}">登陆</van-button>
    </div>
  </div>
</template>

<script>
import { Field, Button } from 'vant'
import { mapActions } from 'vuex'
export default {
  name: 'x-login',
  data () {
    return {
      value: ''
    }
  },
  components: {
    [Button.name]: Button,
    [Field.name]: Field
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
  flex-direction: column;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
}
.form{
  padding: 10px;
}
</style>
