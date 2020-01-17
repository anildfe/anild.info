import Vue from 'vue';
import Vuex from 'vuex';

import adData from './modules/adData';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        adData
    }
});