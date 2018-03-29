import Vue from 'vue';
import Router from 'vue-router';
import store from 'Store';
import { routes } from './routes';

Vue.use(Router);

const routerConfig = {
  mode: 'history',
  routes,
};

const router = new Router(routerConfig);

router.isCurrentRoute = (routeName) => {
  return router.currentRoute.name === routeName;
};

router.beforeEach((to, from, next) => {
  if (to.meta.guest && store.getters.check) {
    return next(to.meta.guest_redirect || '/home');
  }

  if (!to.meta.guest && !store.getters.check) {
    return next({ name: 'login' });
  }

  if (to.name === 'logout' && store.getters.check) {
    store.commit('deauth');
    return next({ name: 'login' });
  }

  if (to.meta.admin && !store.getters.admin) {
    return next({ name: 'home' });
  }

  return next();
});

export default router;
