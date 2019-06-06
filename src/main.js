import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';

import './registerServiceWorker';
Vue.use(Router);
Vue.config.productionTip = false;

const router = new Router({
  routes: [
    { path: '/foo', component: () => import('./Foo.vue') },
    { path: '/koala', component: () => import('./koala.vue') },
    { path: '/bar', component: () => import('./Bar.vue') },
    { path: '/d3', component: () => import('./D3.vue') },
    { path: '/d3-svg', component: () => import('./D3-svg.vue') },
    { path: '/force-link', component: () => import('./force-link.vue') },
    { path: '/circle', component: () => import('./circle.vue') }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
