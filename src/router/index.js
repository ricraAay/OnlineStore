import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('@/views/Payment.vue')
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import('@/views/Basket.vue')
  },
  {
    path: '/ordering',
    name: 'Ordering',
    component: () => import('@/views/Ordering.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('@/views/Catalog.vue')
  },
  {
    path: '/contacts',
    name: 'Сontacts',
    component: () => import('@/views/Сontacts.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import('@/views/Delivery.vue')
  },
  {
    path: '/orderHistory',
    name: 'OrderHistory',
    component: () => import('@/views/OrderHistory.vue')
  },
  {
    path: '*',
    name: 'notFound'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
