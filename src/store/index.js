import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

import Route from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      Userinfo: null,
      UserList: [
                {   UserId :"yy",
                    UserPassword :"yy",
                    UserName :"yy",
                    UserPhone :'123' }
            ],
      login_err: false,
      login_success: false
  },
  getters: {
    allUsers: state=> {
      return state.UserList.length
    }
  },

  mutations: {
    NewUsers: (state, payload) => {
      state.UserList.push(payload)
      Route.push("/login")
    },

    Login:(state, payload)=> {
      let loginUser = null
      state.UserList.forEach(user => {
          if(user.UserId === payload.login_ID){
              loginUser= user
          }
      })
      if(loginUser === null){
          state.login_err=true
          state.login_success=false
      }
      else{
          if(loginUser.UserPassword !== payload.login_password){
            state.login_err=true
            state.login_success=false
          }else{
            
            state.login_success=true
            state.login_err=false
            state.Userinfo=state.UserList.find(c => c.UserId===payload.login_ID)
            Route.push("/")
          }
      }
  }
  ,
  Logout:(state) => {
    state.login_success=false
    state.login_err=false
    state.Userinfo=null
  }
  },
  actions: {
    NewUsers: ({commit}, payload) => {
      commit('NewUsers', payload)
    },
    Login({commit}, payload){
      commit("Login", payload)
    },
    Logout({commit}){
      commit("Logout")
      Route.push("/")
    }

  },
  modules: {
  }
})
