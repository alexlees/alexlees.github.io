<template>
  <div>
    <div :class="$style.me" :style="style">
      <v-avatar :avatar="user.avatar_url" :size="80"></v-avatar>
    </div>
    <van-cell-group>
      <van-cell title="更多信息" is-link clickable @click="goInfo"/>
      <van-switch-cell v-model="addLogo" title="评论加尾" />
    </van-cell-group>
    <div :class="$style.action">
      <van-button type="primary" size="large" v-if="!token" @click="$router.push('/login')">登陆</van-button>
      <van-button type="danger" size="large" v-else @click="preLogout">注销</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Cell, CellGroup, SwitchCell, Button, Dialog } from 'vant'

import bac from './bck.png'
import Avatar from '../../components/Avatar'

export default {
  name: 'x-me',
  components: {
    [Avatar.name]: Avatar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [SwitchCell.name]: SwitchCell,
    [Button.name]: Button
  },
  data () {
    return {
      checked: true
    }
  },
  computed: {
    ...mapGetters(['user', 'token']),
    style () {
      return {
        backgroundImage: `url(${bac})`
      }
    },
    addLogo: {
      get () {
        return this.$store.state.user.addLogo
      },
      set (v) {
        this.$store.commit('SET_ADD_LOGO', v)
      }
    }
  },
  methods: {
    ...mapActions(['userLogout']),
    preLogout () {
      Dialog.confirm({
        title: '确定注销？'
      }).then(this.userLogout)
    },
    goInfo () {
      if (!this.token) {
        this.$toast.fail({
          message: '未登录!',
          duration: 500
        })
      } else {
        this.$router.push(`/user/${this.user.loginname}`)
      }
    }
  }
}
</script>

<style module>
.me{
  width: 375px;
  height: 187px;
  background-color: #ffffff;
  background-size: cover;
  background-position: center center;

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.action{
  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
