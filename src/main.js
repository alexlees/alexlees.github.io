import Vue from 'vue'
import Day from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
import { PullRefresh, Toast, Actionsheet } from 'vant'
import 'animate.css'

import App from './App'
import router from './router'
import store from './store'
import Icon from './base/Icon'

// reset.css
import './assets/reset.css'
// 全局组件

Vue.use(PullRefresh)
Vue.use(Toast)
Vue.use(Actionsheet)
Vue.component(Icon.name, Icon)
Day.locale('zh-cn')
Day.extend(relativeTime)

Vue.config.productionTip = false
Vue.filter('time', (v) => {
  return Day(v).fromNow()
})

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
