import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

Vue.config.productionTip = false;

const EventBus = new Vue();
window.EventBus = EventBus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
