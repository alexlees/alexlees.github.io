import store from '../../util/store'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const initAccesstoken = store.get('token') || ''
const initUser = store.get('user') || {}

export default {
  state: {
    user: initUser,
    needLogin: !(initUser && initAccesstoken),
    accesstoken: initAccesstoken,
    loading: false
  },
  mutations,
  getters,
  actions
}
