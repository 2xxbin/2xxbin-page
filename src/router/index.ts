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
    {
      path: '/voicebank/:vbname',
      name: 'voicebank',
      component: () => import('@/views/VoiceBankView.vue'),
    },
    {
      path: '/notices',
      name: 'notices',
      component: () => import('@/views/NoticesView.vue'),
    },
    {
      path: '/notice/:id',
      name: 'notice',
      component: () => import('@/views/NoticeView.vue'),
    },
  ],
})

export default router
