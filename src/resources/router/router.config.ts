import { createWebHistory, RouterOptions } from 'vue-router'
import Home from '/src/presentation/pages/Home.vue'

const config: RouterOptions = {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
  history: createWebHistory(),
}

export default config