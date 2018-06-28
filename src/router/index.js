import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/Home')
const Category = () => import('../pages/Category')
const Message = () => import('../pages/Message')
const Me = () => import('../pages/Me')
const Root = () => import('../pages/Root')
const Topic = () => import('../pages/Topic')
const User = () => import('../pages/User')
const Login = () => import('../pages/Login')
const Reply = () => import('../pages/Reply')
// const Image = () => import('../pages/Image')
const Collect = () => import('../pages/Collect')
const NotFound = () => import('../pages/NotFound')

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root,
      children: [
        {
          path: '/category',
          component: Category
        },
        {
          path: '/',
          component: Home
        },
        {
          path: '/me',
          component: Me
        },
        {
          path: '/message',
          component: Message
        }
      ]
    },
    {
      path: '/topic/:id',
      component: Topic,
      children: [
        {
          path: '/topic/:id/reply',
          component: Reply
        }
        // {
        //   path: '/topic/:id/image',
        //   component: Image
        // }
      ]
    },
    {
      path: '/user/:name',
      component: User,
      children: [
        {
          path: '/user/:name/collect',
          component: Collect
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
