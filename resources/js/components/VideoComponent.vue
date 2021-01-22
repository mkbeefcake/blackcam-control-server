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
                        <input type="radio" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Video Mode</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="4" v-on:click="onRecordFormat">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Record Format</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple active" id="1" v-on:click="onWhiteBalance">
                        <input type="radio" name="options" checked>
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">White Balance</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="7" v-on:click="onSetAutoWB">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Set auto WB</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="8" v-on:click="onRestoreAutoWB">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Restore auto WB</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
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
                    <label class="btn btn-sm btn-primary btn-simple" id="5" v-on:click="onISO">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">ISO</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="8" v-on:click="onShutterAngle">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Shutter Angle</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="6" v-on:click="onShutterSpeed">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Shutter speed</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="8" v-on:click="onExposureUS">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Exposure (us)</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="8" v-on:click="onExposureOrdinal">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Exposure (ordinal)</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="8" v-on:click="onSetAutoExposureMode">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Set Auto Exposure Mode</span>
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
                                <td width="60%"><custom-slider raising min="2500" max="10000" step="100" v-model="colorTemperature" key="sliderColorTemperature" /></td>
                            </tr>
                            <tr>
                                <td>Tint</td>
                                <td><custom-slider raising min="-50" max="50" step="1" v-model="tint" key="sliderTint"/></td>
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
                    <div class="col-sm-4">
                        <label>ISO value</label>
                        <custom-slider raising :values="isoSliderValues" v-model="isoValue" key="sliderISO"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnISO" v-on:click="setISOValue">Set ISO</button>
            </div>
            <div class="form-group" id="shutterspeed-body" v-if="this.showShutterSpeed">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Shutter Speed</label>
                        <custom-slider raising :values="shutterSpeedSliderValues" v-model="shutterSpeedValue" key="sliderShutterSpeed"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnShutterSpeed" v-on:click="setShutterSpeed">Set Shutter Speed</button>
            </div>
            <div class="form-group" id="set-autowb-body" v-if="this.showSetAutoWB">
                <button class="btn btn-primary" id="btnSetAutoWB" v-on:click="setAutoWB">Set Auto WB</button>
            </div>
            <div class="form-group" id="restore-autowb-body" v-if="this.showRestoreAutoWB">
                <button class="btn btn-primary" id="btnRestoreAutoWB" v-on:click="restoreAutoWB">Restore Auto WB</button>
            </div>
            <div class="form-group" id="shutter-angle-body" v-if="this.showShutterAngle">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Shutter Angle</label>
                        <custom-slider raising min="100" max="36000" step="100" v-model="shutterAngleValue" key="sliderShutterAngle"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnShutterAngle" v-on:click="setShutterAngle">Set Shutter Angle</button>
            </div>
            <div class="form-group" id="exposure-us-body" v-if="this.showExposureUS">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Exposure (us)</label>
                        <custom-slider raising min="0" max="42000" step="1000" v-model="exposureUSValue" key="sliderExposureUS"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnExposureUS" v-on:click="setExposureUS">Set Exposure (us)</button>
            </div>
            <div class="form-group" id="exposure-ordinal-body" v-if="this.showExposureOrdinal">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Exposure (ordinal)</label>
                        <custom-slider raising min="0" max="20" step="1" v-model="exposureOrdinalValue" key="sliderExposureOrdinal"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnExposureOrdinal" v-on:click="setExposureOrdinal">Set Exposure (ordinal)</button>
            </div>
            <div class="form-group" id="set-autoexposure-body" v-if="this.showSetAutoExposure">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Auto Exposure Mode</label>
                        <custom-slider raising :values="autoExposureSliderValues" v-model="autoExposureValue" key="sliderAutoExposure"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnAutoExposure" v-on:click="setAutoExposure">Set auto Exposure Mode</button>
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
            showVideoMode: false,
            showRecordFormat: false,
            showWhiteBalance: true,
            showSetAutoWB: false,
            showRestoreAutoWB : false,
            showRangeMode: false,
            showShapenLevel: false,
            showISO : false,
            showShutterAngle: false,
            showShutterSpeed: false,
            showExposureUS: false,
            showExposureOrdinal: false,
            showSetAutoExposure: false,
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
            shutterSpeedValue : "24",
            shutterAngleValue : "18000",
            exposureUSValue: "1000",
            exposureOrdinalValue: "1",
            autoExposureValue: "0",
            autoExposureSliderValues: [
                {
                    label: "Manual Trigger",
                    value: "0",
                },
                {
                    label: "Iris",
                    value: "1",                    
                },
                {
                    label: "Shutter",
                    value: "2",
                },
                {
                    label: "Iris + Shutter",
                    value: "3",
                },
                {
                    label: "Shutter + Iris",
                    value: "4",
                },
            ],
            isoSliderValues: [
                {
                    label: "1",
                    value: "0"
                },
                {
                    label: "2",
                    value: "1"
                },
                {
                    label: "4",
                    value: "2"
                },
                {
                    label: "8",
                    value: "3"
                },
                {
                    label: "16",
                    value: "4"
                },
                {
                    label: "32",
                    value: "5"
                },
                {
                    label: "64",
                    value: "6"
                },
                {
                    label: "128",
                    value: "7"
                },
            ],
            shutterSpeedSliderValues: [
                {
                    label: "24",
                    value: "24"
                },
                {
                    label: "25",
                    value: "25"
                },
                {
                    label: "30",
                    value: "30"
                },
                {
                    label: "50",
                    value: "50"
                },
                {
                    label: "60",
                    value: "60"
                },
                {
                    label: "100",
                    value: "100"
                },
                {
                    label: "125",
                    value: "125"
                },
                {
                    label: "200",
                    value: "200"
                },
                {
                    label: "250",
                    value: "250"
                },
                {
                    label: "500",
                    value: "500"
                },
                {
                    label: "1000",
                    value: "1000"
                },
                {
                    label: "2000",
                    value: "2000"
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
            this.showRecordFormat = this.showWhiteBalance = this.showSetAutoWB = this.showRestoreAutoWB = this.showRangeMode = 
            this.showShapenLevel = this.showISO = this.showShutterAngle = this.showShutterSpeed = this.showExposureUS =
            this.showExposureOrdinal = this.showSetAutoExposure = false;
        },
        onWhiteBalance: function(event) {
            this.title = "Set White Balance";
            this.showWhiteBalance = true;
            this.showVideoMode = this.showRecordFormat = this.showSetAutoWB = this.showRestoreAutoWB = this.showRangeMode = 
            this.showShapenLevel = this.showISO = this.showShutterAngle = this.showShutterSpeed = this.showExposureUS =
            this.showExposureOrdinal = this.showSetAutoExposure = false;


        },
        onRangeMode: function(event) {
            this.title = "Set Range Mode";
            this.showRangeMode = true;
            this.showRecordFormat = this.showWhiteBalance = this.showSetAutoWB = this.showRestoreAutoWB = this.showVideoMode = 
            this.showShapenLevel = this.showISO = this.showShutterAngle = this.showShutterSpeed = this.showExposureUS =
            this.showExposureOrdinal = this.showSetAutoExposure = false;
        },
        onShapenLevel: function(event) {
            this.title = "Set Sharpen Level";
            this.showShapenLevel = true;
            this.showRecordFormat = this.showWhiteBalance = this.showSetAutoWB = this.showRestoreAutoWB = this.showRangeMode = 
            this.showVideoMode = this.showISO = this.showShutterAngle = this.showShutterSpeed = this.showExposureUS =
            this.showExposureOrdinal = this.showSetAutoExposure = false;
        },
        onRecordFormat: function(event) {
            this.title = "Set Record Format";
            this.showRecordFormat = true;
            this.showVideoMode = this.showWhiteBalance = this.showSetAutoWB = this.showRestoreAutoWB = this.showRangeMode = 
            this.showShapenLevel = this.showISO = this.showShutterAngle = this.showShutterSpeed = this.showExposureUS =
            this.showExposureOrdinal = this.showSetAutoExposure = false;
        },
        onISO: function(event) {
            this.title = "Set ISO";
            this.showISO = true;
            this.showRecordFormat = this.showWhiteBalance = this.showSetAutoWB = this.showRestoreAutoWB = this.showRangeMode = 
            this.showShapenLevel = this.showVideoMode = this.showShutterAngle = this.showShutterSpeed = this.showExposureUS =
            this.showExposureOrdinal = this.showSetAutoExposure = false;
        },
        onShutterSpeed: function(event) {
            this.title = "Set Shutter Speed";
            this.showShutterSpeed = true;
            this.showRecordFormat = this.showWhiteBalance = this.showSetAutoWB = this.showRestoreAutoWB = this.showRangeMode = 
            this.showShapenLevel = this.showISO = this.showShutterAngle = this.showVideoMode = this.showExposureUS =
            this.showExposureOrdinal = this.showSetAutoExposure = false;
        },
        onSetAutoWB: function(event) {
            this.title = "Set Auto White Balance";
            this.showSetAutoWB = true;
            this.showRecordFormat = this.showWhiteBalance = this.showVideoMode = this.showRestoreAutoWB = this.showRangeMode = 
            this.showShapenLevel = this.showISO = this.showShutterAngle = this.showShutterSpeed = this.showExposureUS =
            this.showExposureOrdinal = this.showSetAutoExposure = false;
        },
        onRestoreAutoWB: function(event) {
            this.title = "Restore last White Balance";
            this.showRestoreAutoWB = true;
            this.showRecordFormat = this.showWhiteBalance = this.showSetAutoWB = this.showVideoMode = this.showRangeMode = 
            this.showShapenLevel = this.showISO = this.showShutterAngle = this.showShutterSpeed = this.showExposureUS =
            this.showExposureOrdinal = this.showSetAutoExposure = false;
        },
        onExposureUS: function(event) {
            this.title = "Set Exposure (us)";
            this.showExposureUS = true;
            this.showRecordFormat = this.showWhiteBalance = this.showSetAutoWB = this.showRestoreAutoWB = this.showRangeMode = 
            this.showShapenLevel = this.showISO = this.showShutterAngle = this.showShutterSpeed = this.showVideoMode =
            this.showExposureOrdinal = this.showSetAutoExposure = false;
        },
        onExposureOrdinal: function(event) {
            this.title = "Set Exposure (ordinal)";
            this.showExposureOrdinal = true;
            this.showRecordFormat = this.showWhiteBalance = this.showSetAutoWB = this.showRestoreAutoWB = this.showRangeMode = 
            this.showShapenLevel = this.showISO = this.showShutterAngle = this.showShutterSpeed = this.showExposureUS =
            this.showVideoMode = this.showSetAutoExposure = false;
        },
        onSetAutoExposureMode: function(event) {
            this.title = "Set Auto Exposure mode";
            this.showSetAutoExposure = true;
            this.showRecordFormat = this.showWhiteBalance = this.showSetAutoWB = this.showRestoreAutoWB = this.showRangeMode = 
            this.showShapenLevel = this.showISO = this.showShutterAngle = this.showShutterSpeed = this.showExposureUS =
            this.showExposureOrdinal = this.showVideoMode = false;
        },
        onShutterAngle: function(event) {
            this.title = "Set Shutter Angle";
            this.showShutterAngle = true;
            this.showRecordFormat = this.showWhiteBalance = this.showSetAutoWB = this.showRestoreAutoWB = this.showRangeMode = 
            this.showShapenLevel = this.showISO = this.showVideoMode = this.showShutterSpeed = this.showExposureUS =
            this.showExposureOrdinal = this.showSetAutoExposure = false;
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
        },
        setShutterSpeed: function(event) {
            debugger;
            var command = {
                type : 'shutter-speed',
                shutterSpeedValue: parseInt(this.shutterSpeedValue),
            };

            this.sendVideoCommand(command);
            alert('Sent Shutter Speed is called');
        },
        setAutoWB: function(event) {
            debugger;
            var command = {
                type : 'set-auto-wb',
            };

            this.sendVideoCommand(command);
            alert('Sent Set Auto WB is called');
        },
        restoreAutoWB: function(event) {
            debugger;
            var command = {
                type : 'restore-auto-wb',
            };

            this.sendVideoCommand(command);
            alert('Sent Restore Auto WB is called');
        },
        setShutterAngle: function(event) {
            debugger;
            var command = {
                type : 'shutter-angle',
                shutterAngleValue: parseInt(this.shutterAngleValue),
            };

            this.sendVideoCommand(command);
            alert('Sent Shutter Angle is called');
        },
        setExposureUS: function(event) {
            debugger;
            var command = {
                type : 'exposure-us',
                exposureUSValue: parseInt(this.exposureUSValue),
            };

            this.sendVideoCommand(command);
            alert('Sent Exposure (us) is called');
        },
        setExposureOrdinal: function(event) {
            debugger;
            var command = {
                type : 'exposure-ordinal',
                exposureOrdinalValue: parseInt(this.exposureOrdinalValue),
            };

            this.sendVideoCommand(command);
            alert('Sent Exposure (ordinal) is called');
        },
        setAutoExposure: function(event) {
            debugger;
            var command = {
                type : 'auto-exposure',
                autoExposureValue: parseInt(this.autoExposureValue),
            };

            this.sendVideoCommand(command);
            alert('Sent Auto Exposure Mode is called');
        },
    }
}
</script>
<style scoped>
.slider {
    margin-top: 10px !important;
    margin-bottom: 0px !important;
}
</style>