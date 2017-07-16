import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/home/Page.vue'),
    },
    {
      path: '/coc',
      name: 'coc',
      component: () => import('./components/coc/Page.vue'),
    },
    {
      path: '/organizer',
      name: 'organizer',
      component: () => import('./components/organizer/Page.vue'),
    },
  ],
});
