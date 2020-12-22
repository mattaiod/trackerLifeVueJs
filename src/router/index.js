import Vue from 'vue'
import VueRouter from 'vue-router'
import TrackingActivities from "@/views/TrackingActivities";
import Planning from "@/views/Planning";
import Statistics from "@/views/Statistics";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'trackingActivities',
    component: TrackingActivities
  },
  {
    path: '/planning',
    name: 'planning',
    component: Planning
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
