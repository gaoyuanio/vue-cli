import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '主页',
    },
  },
]

const router = createRouter({
  routes,
  history:createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
