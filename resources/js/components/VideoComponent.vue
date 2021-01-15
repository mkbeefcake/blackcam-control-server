<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-sm-6 text-left">
                    <h5 class="card-category">Video</h5>
                    <h3 class="card-title">{{this.title}}</h3>
                </div>
                <div class="col-sm-6">
                    <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                    <label class="btn btn-sm btn-primary btn-simple active" id="0" v-on:click="onVideoMode">
                        <input type="radio" name="options" checked>
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Video Mode</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple active" id="1" v-on:click="onWhiteBalance">
                        <input type="radio" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">White Balance</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="2" v-on:click="onRangeMode">
                        <input type="radio" class="d-none d-sm-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Range Mode</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-gift-2"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="3" v-on:click="onShapenLevel">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Shapen Level</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="4" v-on:click="onRecordFormat">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Record Format</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="5" v-on:click="onISO">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">ISO</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="form-group" id="video-mode-body" v-if="this.showVideoMode">
                <div class="row">
                    <div class="col-sm-3">
                        <label>Frame rate</label>
                        <select class="form-control" id="frameRate" v-model="frameRate">
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <label>M rate</label>
                        <select class="form-control" id="mRate" v-model="mRate">
                            <option value="0">Regular</option>
                            <option value="1">M-rate</option>
                        </select>
                    </div>
                    <div class="col-sm-3">                    
                        <label>Dimensions</label>
                        <select class="form-control" id="dimensions" v-model="dimensions">
                            <option value="0">NTSC</option>
                            <option value="1">PAL</option>
                            <option value="2">720</option>
                            <option value="3">1080</option>
                            <option value="4">2k DCI</option>
                            <option value="5">2k16:9</option>
                            <option value="6">UHD</option>
                            <option value="7">3k Anamorphic</option>
                            <option value="8">4k DCI</option>
                            <option value="9">4k 16:9</option>
                            <option value="10">4.6k 2.4:1</option>
                            <option value="11">4.6k</option>
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <label>Interlaced</label>
                        <select class="form-control" id="interlaced" v-model="interlaced">
                            <option value="0">Progressive</option>
                            <option value="1">Interlaced</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnManualFocus" v-on:click="setVideoMode">Video Mode</button>
            </div>
            <div class="form-group" id="white-balance-body" v-if="this.showWhiteBalance">
                <div class="col-sm-6">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td width="40%">Color Temperature</td>
                                <td width="60%"><custom-slider raising min="2500" max="10000" step="100" v-model="colorTemperature"/></td>
                            </tr>
                            <tr>
                                <td>Tint</td>
                                <td><custom-slider raising min="-50" max="50" step="1" v-model="tint"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button class="btn btn-primary" id="btnWhiteBalance" v-on:click="setWhiteBalance">White Balance</button>
            </div>
            <div class="form-group" id="range-mode-body" v-if="this.showRangeMode">
                <div class="row">
                    <div class="col-sm-3">
                        <label>Range Mode</label>
                        <select class="form-control" id="rangeMode" v-model="rangeMode">
                            <option value="0">Film</option>
                            <option value="1">Video</option>
                            <option value="2">Extended Video</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnRangeMode" v-on:click="setRangeMode">Range Mode</button>
            </div>
            <div class="form-group" id="sharpen-level-body" v-if="this.showShapenLevel">
                <div class="row">
                    <div class="col-sm-3">
                        <label>Sharpen Level</label>
                        <select class="form-control" id="sharpenLevel" v-model="sharpenLevel">
                            <option value="0">Off</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnSharpenLevel" v-on:click="setSharpenLevel">Sharpen Level</button>
            </div>
            <div class="form-group" id="record-format-body" v-if="this.showRecordFormat">
                <div class="row">
                    <div class="col-sm-3">
                        <label>Frame rate</label>
                        <select class="form-control" id="recordFrameRate" v-model="recordFrameRate">
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                            <option value="120">120</option>
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <label>Sensor Frame rate</label>
                        <select class="form-control" id="recordSensorFrameRate" v-model="recordSensorFrameRate">
                            <option value="0">0</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                            <option value="120">120</option>
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <label>Frame Width</label>
                        <input type="text" class="form-control" placeholder="in Pixels" v-model="recordFrameWidth">
                    </div>
                    <div class="col-sm-3">
                        <label>Frame Height</label>
                        <input type="text" class="form-control" placeholder="in Pixels" v-model="recordFrameHeight">
                    </div>
                    <div class="col-sm-3">
                        <label>Flags</label>
                        <select class="form-control" id="flags" v-model="recordFlags">
                            <option value="0">file-M-rate</option>
                            <option value="1">sensor-M-rate</option>
                            <option value="2">sensor-off-speed</option>
                            <option value="3">interlaced</option>
                            <option value="4">windowed mode</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnRecordFormat" v-on:click="setRecordFormat">Record Format</button>
            </div>
            <div class="form-group" id="iso-body" v-if="this.showISO">
                <div class="row">
                    <div class="col-sm-3">
                        <label>ISO value</label>
                        <custom-slider raising :values="isoSliderValues" v-model="isoValue"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnISO" v-on:click="setISOValue">Set ISO</button>
            </div>

        </div>
    </div>
</template>

<script>
import CustomSlider from "vue-custom-range-slider";
import "vue-custom-range-slider/dist/vue-custom-range-slider.css";

export default {
    components: {
        CustomSlider
    },
    data() {
        return {
            title: 'Set Video Mode',
            showVideoMode: true,
            showWhiteBalance: false,
            showRangeMode: false,
            showShapenLevel: false,
            showRecordFormat: false,
            showISO : false,
            colorTemperature: "2500",
            tint: "0",
            dimensions: 0,
            frameRate:24, 
            mRate:0,
            interlaced:0,
            sharpenLevel: 0,
            recordFrameRate: 24,
            recordSensorFrameRate: 0,
            recordFrameWidth: 352,
            recordFrameHeight: 288,
            recordFlags: 0,
            isoValue: "0",
            rangeMode:0,
            isoSliderValues: [
                {
                    label: "1",
                    value: "1"
                },
                {
                    label: "2",
                    value: "2"
                },
                {
                    label: "4",
                    value: "4"
                },
                {
                    label: "8",
                    value: "8"
                },
                {
                    label: "16",
                    value: "16"
                },
                {
                    label: "32",
                    value: "64"
                },
                {
                    label: "128",
                    value: "128"
                },
            ]
        }
    },
    mounted() {
        console.log('RecordVideo-Component mounted.')
    },
    methods: {
        onVideoMode: function(event) {
            this.title = "Set Video Mode";
            this.showVideoMode = true;
            this.showWhiteBalance = this.showRangeMode = this.showShapenLevel = this.showRecordFormat = this.showISO = false;
        },
        onWhiteBalance: function(event) {
            this.title = "Set White Balance";
            this.showWhiteBalance = true;
            this.showVideoMode = this.showRangeMode = this.showShapenLevel = this.showRecordFormat = this.showISO = false;
        },
        onRangeMode: function(event) {
            this.title = "Set Range Mode";
            this.showRangeMode = true;
            this.showVideoMode = this.showWhiteBalance = this.showShapenLevel = this.showRecordFormat = this.showISO = false;
        },
        onShapenLevel: function(event) {
            this.title = "Set Sharpen Level";
            this.showShapenLevel = true;
            this.showVideoMode = this.showWhiteBalance = this.showRangeMode = this.showRecordFormat = this.showISO = false;
        },
        onRecordFormat: function(event) {
            this.title = "Set Record Format";
            this.showRecordFormat = true;
            this.showVideoMode = this.showWhiteBalance = this.showRangeMode = this.showShapenLevel = this.showISO = false;
        },
        onISO: function(event) {
            this.title = "Set ISO";
            this.showISO = true;
            this.showVideoMode = this.showWhiteBalance = this.showRangeMode = this.showShapenLevel = this.showRecordFormat = false;
        },
        sendVideoCommand: function(command) {
            if (selectedCameraId == "")
                socket.emit('admin', null, JSON.stringify(command));
            else
                socket.emit('admin', selectedCameraId, JSON.stringify(command));
        },
        setVideoMode: function(event) {
            debugger;
            var command = {
                type : 'video-mode',
                frameRate : this.frameRate,
                mRate : this.mRate,
                dimensions : this.dimensions,
                interlaced : this.interlaced
            };
            
            this.sendVideoCommand(command);
            alert('Sent Video Mode is called');
        },
        setWhiteBalance: function(event) {
            debugger;
            var command = {
                type : 'white-balance',
                colorTemperature : this.colorTemperature,
                tint : this.tint
            };
            
            this.sendVideoCommand(command);
            alert('Sent White Balance is called');
        },
        setRangeMode: function(event) {
            debugger;
            var command = {
                type : 'range-mode',
                rangeMode: this.rangeMode
            };
            
            this.sendVideoCommand(command);
            alert('Sent Range Mode is called');
        },
        setSharpenLevel: function(event) {
            debugger;
            var command = {
                type : 'sharpen-level',
                sharpenLevel: this.sharpenLevel
            };
            
            this.sendVideoCommand(command);
            alert('Sent Sharpen Level is called');
        },
        setRecordFormat: function(event) {
            debugger;
            var command = {
                type : 'record-format',
                recordFrameRate: this.recordFrameRate,
                recordSensorFrameRate: this.recordSensorFrameRate,
                recordFrameWidth: this.recordFrameWidth,
                recordFrameHeight: this.recordFrameHeight,
                recordFlags: this.recordFlags
            };
            
            this.sendVideoCommand(command);
            alert('Sent Record Format is called');
        },
        setISOValue: function(event) {
            debugger;
            var command = {
                type : 'set-iso',
                isoValue: parseInt(this.isoValue),
            };

            this.sendVideoCommand(command);
            alert('Sent ISO is called');
        }

    }
}
</script>
<style scoped>
.slider {
    margin-top: 10px !important;
    margin-bottom: 0px !important;
}
</style>