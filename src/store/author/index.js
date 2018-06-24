import mutations from './mutations'
import getters from './getters'
import actions from './actions'
export default {
  namespaced: true,
  state: {
    author: {
      info: null,
      collects: []
    },
    err: false,
    loading: false,
    errMsg: ''
  },
  mutations,
  getters,
  actions
}
