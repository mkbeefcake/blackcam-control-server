import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import VuexPersist from 'vuex-persist';

const state = {
    cameras : [],
}

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});

export default {
    state, 
    getters,
    actions,
    mutations,
    plugins: [vuexLocal.plugin],
}