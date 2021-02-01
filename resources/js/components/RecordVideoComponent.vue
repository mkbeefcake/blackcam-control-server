<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-sm-4 text-left">
                   <a data-toggle="collapse" href="#collapseMedia">Media</a>
                    <h3 class="card-title">{{this.title}}</h3>
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
            <div class="form-group" id="show-record-body" v-if="this.showRecord">
                <button class="btn btn-primary" id="btnRecord" v-on:click="setRecord">Record</button>
                <button class="btn btn-primary" id="btnStop" v-on:click="setStop">Stop</button>
                <div class="form-group">
                    <label id="transportmode"></label>
                    <label id="remainingTime"></label>
                </div>
            </div>
            <div class="form-group" id="" v-if="this.showCodec">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Basic codec</label>
                        <select class="form-control" id="basicCodec" v-model="basicCodecValue" v-on:change="onChangedBasicCodec($event)">
                            <option value="0">CinemaDNG</option>
                            <option value="1">DNxHD</option>
                            <option value="2">ProRes</option>
                            <option value="3"> Blackmagic RAW</option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <label>Code Variant</label>
                        <select class="form-control" id="codeVariant" v-model="codeVariantValue">
                            <option v-for="(item, key) in codeVariantArray" :value="item">
                                {{key}}
                            </option>
                        </select>
                    </div>
                </div>
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
            title: "Record",
            showRecord : true,
            showCodec : false,
            showTransportMode : false,
            showPlaybackControl : false,
            basicCodecValue: "0",
            codeVariantValue: "0",
            codeVariantArray: {
                "uncompressed" : "0",
                "lossy 3:1" : "1",
                "lossy 4:1" : "2",
            },
        }
    },
    methods: {
        onRecord: function(event) {
            this.title = "Record";
            this.showRecord = true;
            this.showCodec = this.showTransportMode = this.showPlaybackControl = false;
        },
        onCodec: function(event) {
            this.title = "Codec";
            this.showCodec = true;
            this.showRecord = this.showTransportMode = this.showPlaybackControl = false;
        },
        onTransportMode: function(event) {
            this.title = "Transport Mode";
            this.showTransportMode = true;
            this.showRecord = this.showCodec = this.showPlaybackControl = false;
        },
        onPlaybackControl: function(event) {
            this.title = "Playback Control";
            this.showPlaybackControl = true;
            this.showRecord = this.showCodec = this.showTransportMode = false;
        },
        onChangedBasicCodec: function(event) {
            debugger;
            if (event.target.value == "0") {
                this.codeVariantArray = {
                    "uncompressed" : "0",
                    "lossy 3:1" : "1",
                    "lossy 4:1" : "2",
                };
            }
            else if (event.target.value == "1") {
                this.codeVariantArray = {};
            }
            else if (event.target.value == "2") {
                this.codeVariantArray = {
                    "HQ" : "0",
                    "422" : "1",
                    "LT" : "2",
                    "Proxy" : "3",
                    "444" : "4",
                    "444XQ" : "5" 
                };
            }
            else if (event.target.value == "3") {
                this.codeVariantArray = {
                    "Q0" : "0",
                    "Q5" : "1",
                    "3:1" : "2",
                    "5:1" : "3",
                    "8:1" : "4",
                    "12:1" : "5"
                };
            }
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
