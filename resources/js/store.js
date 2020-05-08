import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        count:10,
        cursos:[],
        usuarios: []
    },
    mutations:{
      aumentar(state){
        state.count ++
      },
      reducir(state){
        state.count --
      },
    }
})

export default store