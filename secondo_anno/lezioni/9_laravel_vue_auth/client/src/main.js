import Vue from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';

import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status == 401) {
    router.push("/login");
  }
});

Vue.config.productionTip = false

store.dispatch('auth/me').then(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
});
