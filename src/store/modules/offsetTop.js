export default {
  state: {
    value: 0
  },

  mutations: {
    'UPDATE_OFFSET_TOP'(state, payload) {
      state.value = payload;
    }
  },

  getters: {
    offsetTop: state => state.value
  }
}