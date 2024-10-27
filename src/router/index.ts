import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/voicebanks',
      name: 'voicebanks',
      component: () => import('@/views/VoiceBanksView.vue'),
    },
  ],
})

export default router
