import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home'
import User from '../page/user'
import Credit from '../page/credit'
import Journey from '../page/journey'
import Wallet from '../page/wallet'
import Coupon from '../page/coupon'
import Input from '../page/input'
import Result from '../page/result'
import Complain from '../page/complain'
import Repair from '../page/Repair'
import Activity from '../page/activity'
import Code from '../page/code'
import Guide from '../page/guide'
import Howopen from '../page/howopen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/credit',
      name: 'Credit',
      component: Credit
    },
    {
      path: '/journey',
      name: 'Journey',
      component: Journey
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/coupon',
      name: 'Coupon',
      component: Coupon
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    },
    {
      path: '/complain',
      name: 'Complain',
      component: Complain
    },
    {
      path: '/repair',
      name: 'Repair',
      component: Repair
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/howopen',
      name: 'Howopen',
      component: Howopen
    }
  ]
})
