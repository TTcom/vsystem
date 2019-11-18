import Vue from 'vue'
import {heightTransition} from './vuetransition'

export default{

    install(Vue){
           Vue.component('hetransition',heightTransition)
    }
}