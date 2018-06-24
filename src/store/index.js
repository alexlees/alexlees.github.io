import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import topic from './topic'
import home from './home'
import message from './message'
import category from './category'
import reply from './reply'
import author from './author'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    topic,
    home,
    category,
    message,
    reply,
    author
  }
})
