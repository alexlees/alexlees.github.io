import mutations from './mutations'
import getters from './getters'
import actions from './actions'
export default {
  namespaced: true,
  state: {
    id: null,
    topic: null,
    err: false,
    loading: false,
    msg: '',
    complete: false
  },
  mutations,
  getters,
  actions
}
