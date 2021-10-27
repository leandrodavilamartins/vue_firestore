import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase/compat/app"
import "firebase/compat/auth"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      loggedIn : false,
      user: ''
  },
  getters: {
      getLoginState: function(state){
          return state.loggedIn;
      }
  },
  mutations: {
      LOG_OUT: (state) => {
          try{
              firebase.default.auth().signOut();
              sessionStorage.clear()
              state.loggedIn = false;
              this.$router.replace({name:'Home'});
          }
          catch(err){
            console.log(err);
          }
      },
      logIn: function(state){
          state.loggedIn = true
      },
      SET_USER: (state) => {
          state.user = firebase.default.auth().currentUser;
      }
  },
  actions: {
      setUser: (context) => {
          context.commit("SET_USER");
      },
      logOut: (context) => {
        context.commit("LOG_OUT");
      }
  },
  modules: {
  },
  plugins:
      [createPersistedState()]
})
