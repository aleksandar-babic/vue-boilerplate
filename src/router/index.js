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
  // logged in but shouldn't be
  if (to.meta.guest && store.getters.isLogged) {
    return next({ name: '/home' });
  }
  // not logged in but should be
  if (!to.meta.guest && !store.getters.isLogged) {
    return next({ name: 'login' });
  }
  // not admin but should be
  if (to.meta.admin && !store.getters.isAdmin) {
    return next({ name: 'home' });
  }

  return next();
});

export default router;
