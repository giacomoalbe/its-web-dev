import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue';
import NotFound from '@/components/NotFound.vue';
import Salutatore from '@/components/Salutatore.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/hello',
    name: "Hello",
    component: HelloWorld,
  },
  {
    path: '/about',
    name: "About",
    component: NotFound,
  },
  {
    path: '/saluta/:nome/:numero',
    name: "Saluta",
    component: Salutatore,
  },
  {
    path: '',
    redirect: '/hello',
  },
  {
    path: '*',
    component: NotFound,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
