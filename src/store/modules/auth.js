// auth.js (Vuex module)
const state = {
    email: null,
    password: null,
    answer: null
  };
  
  const mutations = {
    setEmail(state, email) {
      state.email = email;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setAnswer(state, answer) {
      state.answer = answer;
    }
  };
  
  const actions = {
    // Actions to set email and password can go here if needed
  };
  
  const getters = {
    getEmail: state => state.email,
    getPassword: state => state.password,
    getSecurity: state => state.security
  };
  
  export default {
    state,
    mutations,
    actions,
    getters
  };
  