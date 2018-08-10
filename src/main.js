import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import 'vuetify/dist/vuetify.min.css'
import 'vue-loaders/dist/vue-loaders.css';
import * as VueLoaders from 'vue-loaders';

Vue.use(VueLoaders);
Vue.use(VeeValidate);
Vue.use(Vuetify);

Vue.config.productionTip = false;

const EventBus = new Vue();
window.EventBus = EventBus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
