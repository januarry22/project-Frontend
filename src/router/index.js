import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Service from '../views/Service.vue'
import Login from '../views/Login.vue'

import HR from '../views/service/HR.vue'
import Sales from '../views/service/Sales.vue'
import Stock from '../views/service/Stock.vue'
import Expand from '../views/service/Expand.vue'

import VueChartJS from '@/components/VueChartJS'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/chartjs',
    name: 'VueChartJS',
    component: VueChartJS
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/service",
    name: "Service",
    component: Service
  },
  {
    path: "/sales",
    name: "Sales",
    component: Sales
  },
  {
    path: "/expand",
    name: "Expand",
    component: Expand
  },
  {
    path: "/stock",
    name: "Stock",
    component: Stock
  },
  {
    path: "/HR",
    name: "HR",
    component: HR
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
