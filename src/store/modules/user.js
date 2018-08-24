export default {
  state: {
    id: '123456789',
    password: 'password',
    name: 'Username',
    signIn: false
  },

  mutations: {
    'USER_SIGN_IN'(state) {
      state.signIn = true
    },
    'USER_SIGN_OUT'(state) {
      state.signIn = false
    }
  },

  getters: {
    user: state => state
  }
}