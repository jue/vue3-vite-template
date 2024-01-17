import { createRouter, createWebHistory, useRoute } from 'vue-router'

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)

const defaultRouter = [
  ...routes,
]

const router = createRouter({
  history: createWebHistory(),
  routes: defaultRouter,
})

// const whiteList = ['/login', '/signup', '/wechat/login']

// router.beforeEach(async (to, from, next) => {
//   const userStore = useUserStore()

//   if (whiteList.includes(to.path)) {
//     next()
//     return
//   }

//   const hasToken = getToken()
//   if (hasToken) {
//     if (!userStore.user) {
//       await userStore.userInfo()
//     }

//     next()
//   }
//   else {
//     if (isWeixin()) {
//       location.href = `https://wx.jue.sh/wechat/mp/authorize?redirect_uri=${encodeURIComponent(to.fullPath)}`
//     }
//     else {
//       next(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
//     }
//   }
// })

router.afterEach((to, from) => {
  document.title = to.meta.title || 'Vite+Vue+TW'
})

export default router