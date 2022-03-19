import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Accueil'
    }
  },
  {
    path: '/visual-experience',
    name: 'visual-experience',
    component: () => import('../views/VisualExperience.vue'),
    meta: {
      title: 'Expérience visuelle'
    }
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: () => import('../views/Experiences.vue'),
    meta: {
      title: 'Mon expérience'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
