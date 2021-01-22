<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-sm-6 text-left">
                    <h5 class="card-category">Display</h5>
                    <h3 class="card-title">{{this.title}}</h3>
                </div>
                <div class="col-sm-6">
                    <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                    <label class="btn btn-sm btn-primary btn-simple active" id="0" v-on:click="onBrightness">
                        <input type="radio" name="options" checked>
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Brightness</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="1" v-on:click="onExposureAndFocus">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Exposure and Focus</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple active" id="2" v-on:click="onZebraLevel">
                        <input type="radio" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Zebra Level</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="3" v-on:click="onPeakingLevel">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Peaking Level</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="4" v-on:click="onColorbarEnable">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Color bar enable</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="5" v-on:click="onFocusAssist">
                        <input type="radio" class="d-none d-sm-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Focus Assist</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-gift-2"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="6" v-on:click="onReturnFeedEnable">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Feed Enable</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="form-group" id="brightness-body" v-if="this.showBrightness">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Brightness</label>
                        <custom-slider raising min="0" max="1" step="0.05" v-model="brightnessValue" key="sliderBrightness"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnBrightness" v-on:click="setBrightness">Set Brightness</button>
            </div>
            <div class="form-group" id="exposure-focus-body" v-if="this.showExposureAndFocus">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Exposure and focus tools</label>
                        <custom-slider raising :values="exposureFocusSliderValues" v-model="exposureFocusValue" key="sliderExposureFocus"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnExposureFocus" v-on:click="setExposureAndFocus">Set Exposure and focus tools</button>
            </div>
            <div class="form-group" id="zebra-level-body" v-if="this.showZebraLevel">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Zebra Level</label>
                        <custom-slider raising min="0" max="1" step="0.05" v-model="zebraLevelValue" key="sliderZebraLevel"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnZebraLevel" v-on:click="setZebraLevel">Set Zebra Level</button>
            </div>
            <div class="form-group" id="peaking-level-body" v-if="this.showPeakingLevel">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Peaking Level</label>
                        <custom-slider raising min="0" max="1" step="0.05" v-model="peakingLevelValue" key="sliderPeakingLevel"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnPeakingLevel" v-on:click="setPeakingLevel">Set Peaking Level</button>
            </div>
            <div class="form-group" id="colorbar-enable-body" v-if="this.showColorbarEnable">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Color bar enable</label>
                        <custom-slider raising min="0" max="30" step="1" v-model="colorbarEnableValue" key="sliderColorbarEnable"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnColorbarEnable" v-on:click="setColorbarEnable">Set Colorbar Enable</button>
            </div>
            <div class="form-group" id="focus-assist-body" v-if="this.showFocusAssist">
                <div class="col-sm-6">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td width="40%">Focus assist method</td>
                                <td width="60%">
                                    <select class="form-control" id="focusAssist" v-model="focusAssistMethod">
                                        <option value="0">Peak</option>
                                        <option value="1">Colored lines</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Focus line color</td>
                                <td>
                                    <select class="form-control" id="focusLineColor" v-model="focusLineColor">
                                        <option value="0">Red</option>
                                        <option value="1">Green</option>
                                        <option value="2">Blue</option>
                                        <option value="3">White</option>
                                        <option value="4">Black</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button class="btn btn-primary" id="btnFocusAssist" v-on:click="setFocusAssist">Focus Assist</button>
            </div>
            <div class="form-group" id="return-feedenable-body" v-if="this.showReturnFeedEnable">
                <div class="row">
                    <div class="col-sm-4">
                        <label>Program return feed enable</label>
                        <custom-slider raising min="0" max="30" step="1" v-model="returnFeedEnableValue" key="sliderFeedEnable"/>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnFeedEnable" v-on:click="setReturnFeedEnable">Set Program return feed enable</button>
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
            title: 'Set Brightness',
            showBrightness: true,
            showExposureAndFocus: false,
            showZebraLevel: false,
            showPeakingLevel: false, 
            showColorbarEnable: false,
            showFocusAssist: false,
            showReturnFeedEnable: false,
            brightnessValue: "0",
            exposureFocusValue: "0",
            zebraLevelValue: "0",
            peakingLevelValue: "0",
            colorbarEnableValue: "0",
            focusAssistMethod: 0,
            focusLineColor: 0,
            returnFeedEnableValue: 0,
            exposureFocusSliderValues: [
                {
                    label: "Disabled",
                    value: "0"
                },
                {
                    label: "Zebra",
                    value: "1"
                },
                {
                    label: "Focus assist",
                    value: "2"
                },
                {
                    label: "Zebra, Focus assist",
                    value: "3"
                },
                {
                    label: "False color",
                    value: "4"
                },
                {
                    label: "Zebra, False color",
                    value: "5"
                },
                {
                    label: "Focus assist, False color",
                    value: "6"
                },
                {
                    label: "Zebra, Focus assist, False color",
                    value: "7"
                },
            ]
        }
    },
    mounted() {
        console.log('RecordDisplay-Component mounted.')
    },
    methods: {
        onBrightness: function(event) {
            this.title = "Set Brightness";
            this.showBrightness = true;
            this.showExposureAndFocus = this.showZebraLevel = this.showPeakingLevel = 
            this.showColorbarEnable = this.showFocusAssist = this.showReturnFeedEnable = false;
        },
        onExposureAndFocus: function(event) {
            this.title = "Set Exposure and Focus tools";
            this.showExposureAndFocus = true;
            this.showBrightness = this.showZebraLevel = this.showPeakingLevel = 
            this.showColorbarEnable = this.showFocusAssist = this.showReturnFeedEnable = false;
        },
        onZebraLevel: function(event) {
            this.title = "Set Zebra Level";
            this.showZebraLevel = true;
            this.showExposureAndFocus = this.showBrightness = this.showPeakingLevel = 
            this.showColorbarEnable = this.showFocusAssist = this.showReturnFeedEnable = false;
        },
        onPeakingLevel: function(event) {
            this.title = "Set Peaking Level";
            this.showPeakingLevel = true;
            this.showExposureAndFocus = this.showZebraLevel = this.showBrightness = 
            this.showColorbarEnable = this.showFocusAssist = this.showReturnFeedEnable = false;
        },
        onColorbarEnable: function(event) {
            this.title = "Set Color bar enable";
            this.showColorbarEnable = true;
            this.showExposureAndFocus = this.showZebraLevel = this.showPeakingLevel = 
            this.showBrightness = this.showFocusAssist = this.showReturnFeedEnable = false;
        },
        onFocusAssist: function(event) {
            this.title = "Set Focus Assist";
            this.showFocusAssist = true;
            this.showExposureAndFocus = this.showZebraLevel = this.showPeakingLevel = 
            this.showColorbarEnable = this.showBrightness = this.showReturnFeedEnable = false;
        },
        onReturnFeedEnable: function(event) {
            this.title = "Set Program return feed enable";
            this.showReturnFeedEnable = true;
            this.showExposureAndFocus = this.showZebraLevel = this.showPeakingLevel = 
            this.showColorbarEnable = this.showFocusAssist = this.showBrightness = false;
        },
        sendDisplayCommand: function(command) {
            if (selectedCameraId == "")
                socket.emit('admin', null, JSON.stringify(command));
            else
                socket.emit('admin', selectedCameraId, JSON.stringify(command));
        },
        setBrightness: function(event) {
            debugger;
            var command = {
                type : 'brightness',
                brightnessValue : this.brightnessValue,
            };
            
            this.sendDisplayCommand(command);
            alert('Sent Brightness is called');
        },
        setExposureAndFocus: function(event) {
            debugger;
            var command = {
                type : 'exposure-focus',
                exposureFocusValue : this.exposureFocusValue,
            };
            
            this.sendDisplayCommand(command);
            alert('Sent Exposure & Focus tools is called');
        },
        setZebraLevel: function(event) {
            debugger;
            var command = {
                type : 'zebra-level',
                zebraLevelValue : this.zebraLevelValue,
            };
            
            this.sendDisplayCommand(command);
            alert('Sent Zebra level is called');
        },
        setPeakingLevel: function(event) {
            debugger;
            var command = {
                type : 'peaking-level',
                peakingLevelValue : this.peakingLevelValue,
            };
            
            this.sendDisplayCommand(command);
            alert('Sent Peaking level is called');
        },
        setColorbarEnable: function(event) {
            debugger;
            var command = {
                type : 'colorbar-enable',
                colorbarEnableValue : this.colorbarEnableValue,
            };
            
            this.sendDisplayCommand(command);
            alert('Sent Colorbar Enable is called');
        },
        setFocusAssist: function(event) {
            debugger;
            var command = {
                type : 'focus-assist',
                focusAssistMethod: this.focusAssistMethod,
                focusLineColor: this.focusLineColor,
            };
            
            this.sendDisplayCommand(command);
            alert('Sent Focus assist is called');
        },
        setReturnFeedEnable: function(event) {
            debugger;
            var command = {
                type : 'return-feedenable',
                returnFeedEnableValue: this.returnFeedEnableValue,
            };
            
            this.sendDisplayCommand(command);
            alert('Sent Program return feed enable is called');
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