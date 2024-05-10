import { createWebHistory, createRouter } from 'vue-router'

import PrinicipalPage from '@/pages/PrincipalPage.vue'
import TablePage from '@/pages/TablePage.vue'

const routes = [
  { path: '/', component: PrinicipalPage },
  { path: '/tables', component: TablePage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
