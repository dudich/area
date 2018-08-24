export default {
  state: {
    id: '123456789',
    password: 'password',
    name: 'Username',
    logIn: false
  },

  mutations: {
    'USER_SIGN_IN'(state) {
      state.logIn = true
    },
    'USER_SIGN_OUT'(state) {
      state.logIn = false
    }
  },

  getters: {
    user: state => state
  }
}