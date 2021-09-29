import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import CarsList from './components/CarsList.vue';
import CarsView from './components/CarsView.vue';

Vue.config.productionTip = false

const routes = [
  {
    path: '/cars/list',
    name: "list_cars",
    component: CarsList,
  },
  {
    path: '/cars/view/:id',
    name: "view_car",
    component: CarsView,
  },
  {
    path: '',
    redirect: '/cars/list',
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
