<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-sm-4 text-left">
                   <a data-toggle="collapse" href="#collapseMedia">Media</a>
                    <h3 class="card-title">Recording....</h3>
                </div>
                <div class="col-sm-8">
                    <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                    <label class="btn btn-sm btn-primary btn-simple active" id="0" v-on:click="onRecord">
                        <input type="radio" name="options" checked>
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Record</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple active" id="1" v-on:click="onCodec">
                        <input type="radio" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Codec</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="2" v-on:click="onTransportMode">
                        <input type="radio" class="d-none d-sm-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Transport mode</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-gift-2"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="2" v-on:click="onPlaybackControl">
                        <input type="radio" class="d-none d-sm-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Playback Control</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-gift-2"></i>
                        </span>
                    </label>
                    </div>
                </div>
            </div>
        </div>
        <div id="collapseMedia" class="card-body">
            <button class="btn btn-primary" id="btnRecord" v-on:click="setRecord">Record</button>
            <button class="btn btn-primary" id="btnStop" v-on:click="setStop">Stop</button>
            <div class="form-group">
                <label id="transportmode"></label>
                <label id="remainingTime"></label>
            </div>
        </div>
    </div>
</template>

<script>
import CustomSlider from "vue-custom-range-slider";
import "vue-custom-range-slider/dist/vue-custom-range-slider.css";

export default {
    mounted() {
        console.log('RecordVideo-Component mounted.')
    },
    components: {
        CustomSlider
    },
    data() {
        return {
            title: "Recording....",
            showRecord : true,
            showCodec : false,
            showTransportMode : false,
            showPlaybackControl : false,
        }
    },
    methods: {
        onRecord: function(event) {

        },
        onCodec: function(event) {

        },
        onTransportMode: function(event) {

        },
        onPlaybackControl: function(event) {

        },
        sendTransportModeCommand: function(command) {
            if (selectedCameraId == "")
                socket.emit('admin', null, JSON.stringify(command));
            else
                socket.emit('admin', selectedCameraId, JSON.stringify(command));
        },
        setRecord: function(event) {
            debugger;
            var command = {
                type : 'record'
            };

            this.sendTransportModeCommand(command);
            alert('Sent Record command');
        },
        setStop: function(event) {
            debugger;
            var command = {
                type : 'preview'
            };

            this.sendTransportModeCommand(command);
            alert('Sent Stop command');
        }
    }
}
</script>
