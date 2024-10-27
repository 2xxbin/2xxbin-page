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
    {
      path: '/reclists',
      name: 'reclists',
      component: () => import('@/views/ReclistsView.vue'),
    },
    {
      path: '/reclist/:id',
      name: 'reclist',
      component: () => import('@/views/ReclistView.vue'),
    },
  ],
})

export default router
