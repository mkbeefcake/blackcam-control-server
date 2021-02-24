import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import VuexPersist from 'vuex-persist';


const state = {
    cameras : [],
    selectedCameraId : "",
}

const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage, 
});
export default {
    state, 
    getters,
    actions,
    mutations,
    plugins: [vuexLocalStorage.plugin],
    mixin: {
        methods: {
            getSelectedCamera: function() {
                var selectedCameraId = this.$store.state.selectedCameraId;
                if (selectedCameraId == "")
                    return undefined;
                
                var cameras = this.$store.state.cameras;
                var index = cameras.findIndex(_ => _.cameraId === selectedCameraId);
                if (index == -1)
                    return undefined;
    
                return cameras[index];
            }
        }
    }
}