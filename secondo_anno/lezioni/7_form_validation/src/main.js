import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import CarsList from '@/components/CarsList.vue';
import CategoriesList from '@/components/CategoriesList.vue';
import CarsView from '@/components/CarsView.vue';
import CarsCreate from '@/components/CarsCreate.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: '/cars/list',
    name: "cars_list",
    component: CarsList,
  },
  {
    path: '/categories/list',
    name: "categories_list",
    component: CategoriesList,
  },
  {
    path: '/cars/view/:id',
    name: "cars_view",
    component: CarsView,
  },
  {
    path: '/cars/edit/:id',
    name: "cars_edit",
    component: CarsCreate,
  },
  {
    path: '/cars/create',
    name: "cars_create",
    component: CarsCreate,
  },
  {
    path: '',
    redirect: '/cars/list',
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
