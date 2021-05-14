import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        transections: localStorage.getItem('transections')?JSON.parse(localStorage.getItem('transections')):[]
    },
    getters: {
        getTransection(state) {
            return state.transections
        }
    },
    mutations: {
        addTransection(state, payload) {
            state.transections.push({...payload,'id':state.transections.length+1})
            localStorage.setItem('transections',JSON.stringify(state.transections))
        }
    }
})