export default {
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN')
    }
  },
  getters: {},
  actions: {
    login({ commit }, user) {
      return fetch('http://localhost:8000/api/login', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((res) => {
          commit('setUser', res);
          return res;
        });
    },
    register({ commit }, user) {
      return fetch('http://localhost:8000/api/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((res) => {
          commit('setUser', res);
          return res;
        });
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  mutations: {
    logout: state => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem('TOKEN')
    },

    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token)
    }
  }
}