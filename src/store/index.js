import { reject, resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

import Route from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      //Userinfo: null,
      user: {
        id: null,
        name: null,
        auth: [],
      },

      login_err: false,
      login_success: false
  },
  getters: {
    // allUsers: state=> {
    //   return state.UserList.length
    // }
  },

  mutations: {
    SET_USER(state, data){
      state.user.id= data.userID
      state.user.name=data.name
      state.user.auth=data.authorities
      router.push('/about')
    }
  },
  actions: {
    // getHello({commit}){
    //   return new Promise((resolve, reject)=>{
    //     axios.get('/api/test/user'{})
    //     .then(Response=> {
    //       console.log(Response)
    //       commit('SET_BOARD_LIST', Response.data)
    //     })
    //     .catch(Error=>{
    //       console.log(Error)
    //       reject(Error)
    //     })
    //   })
    // },
    loginProcess({commit}, payload){
      console.log(payload)
      return new Promise((resolve, reject)=>{
        axios.post('/api/auth/signin', payload)
        .then(Response=>{
          console.log(Response.data)
          if(Response.data.userID!=null){
            axios.defaults.headers.common['Authorization'] = 'Bearer ${Response.data.token}'
            commit('SET_USER', Response.data)
          }
        })
        .catch(Error=>{
          console.log('error')
          reject(Error)
        })
      })
    },

    async REQUEST_JOIN(context, member){
      try{
        const response = await requestJoinMember(member);
        context.commit('OPEN_MODAL', setModalTexts(true));
        return response;
      }catch(e){
        context.commit('OPEN_MODAL', setModalTexts(false));
      }

    }
  }
  //   NewUsers: (state, payload) => {
  //     state.UserList.push(payload)
  //     Route.push("/login")
  //   },

  //   Login:(state, payload)=> {
  //     let loginUser = null
  //     state.UserList.forEach(user => {
  //         if(user.UserId === payload.login_ID){
  //             loginUser= user
  //         }
  //     })
  //     if(loginUser === null){
  //         state.login_err=true
  //         state.login_success=false
  //     }
  //     else{
  //         if(loginUser.UserPassword !== payload.login_password){
  //           state.login_err=true
  //           state.login_success=false
  //         }else{
            
  //           state.login_success=true
  //           state.login_err=false
  //           state.Userinfo=state.UserList.find(c => c.UserId===payload.login_ID)
  //           Route.push("/")
  //         }
  //     }
  // }
  // ,
  // Logout:(state) => {
  //   state.login_success=false
  //   state.login_err=false
  //   state.Userinfo=null
  // }
  // },
  // actions: {
  //   NewUsers: ({commit}, payload) => {
  //     commit('NewUsers', payload)
  //   },
  //   Login({commit}, payload){
  //     commit("Login", payload)
  //   },
  //   Logout({commit}){
  //     commit("Logout")
  //     Route.push("/")
  //   }

  // },

})
