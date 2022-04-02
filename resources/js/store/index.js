import  Vue  from 'vue';
import Vuex from 'vuex';


import getters from './getters.js';
import mutations from './mutations.js';
import  * as actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{

    },
    state: {

    },
    mutations,
    actions,
    getters,
});



