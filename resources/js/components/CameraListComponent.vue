<template>
    <ul class="nav" id="cameraList">
        <li v-for="camera in VueStore.state.cameras" :key="camera.cameraId">
            {{ camera.cameraName }}
        </li>            
    </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
    mounted() {
        console.log('CameraList-Component mounted.')
    },
    computed: mapState({
        cameras: state => state.cameras,
    })
}
</script>
<style scoped>
</style>