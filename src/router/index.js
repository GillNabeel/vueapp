import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/New.vue'
import Edit from '../views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/New",
    name: "New",
    component:New
  },
  {
    path:"/Edit/:id",
    name: "Edit",
    component: Edit,
    props:true
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
