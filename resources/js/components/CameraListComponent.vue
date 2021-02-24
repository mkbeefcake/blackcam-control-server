<template>
    <ul class="nav" id="cameraList">
        <li v-for="camera in cameras" :id="camera.cameraId">
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
