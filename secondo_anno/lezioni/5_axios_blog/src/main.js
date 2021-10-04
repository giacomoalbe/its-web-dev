import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import PostsList from './components/PostsList.vue';
import PostView from './components/PostView.vue';

const routes = [
  {
    path: '/posts/list',
    component: PostsList,
  },
  {
    path: '/posts/view/:id',
    component: PostView,
  },
  {
    path: '',
    redirect: '/posts/list',
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
