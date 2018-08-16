import Vue from 'vue'
import Vuex from 'vuex'
import properties from './modules/properties'
import extras from './modules/extras'
import filters from './modules/filters'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    properties,
    extras,
    filters
  }
})
