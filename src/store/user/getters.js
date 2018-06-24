export default {
  token (state) {
    if (state.accesstoken) {
      return state.accesstoken
    }
    return ''
  },
  needLogin (state) {
    return state.needLogin
  },
  loading (state) {
    return state.loading
  },
  user (state) {
    if (state.user && state.user.success) {
      return {avatar_url: state.user.avatar_url, loginname: state.user.loginname}
    } else {
      return {avatar_url: '', loginname: ''}
    }
  },
  addLogo (state) {
    return state.addLogo
  }
}
