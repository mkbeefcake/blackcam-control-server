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
                    <label class="btn btn-sm btn-primary btn-simple active" id="0" v-on:click="videoMode">
                        <input type="radio" name="options" checked>
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Video Mode</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple active" id="1" v-on:click="whiteBalance">
                        <input type="radio" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">White Balance</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="2" v-on:click="rangeMode">
                        <input type="radio" class="d-none d-sm-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Range Mode</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-gift-2"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="3" v-on:click="shapenLevel">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Shapen Level</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02"></i>
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary btn-simple" id="4" v-on:click="recordFormat">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Record Format</span>
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
                        <select class="form-control" id="rate">
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <label>M rate</label>
                        <select class="form-control" id="rate">
                            <option value="0">Regular</option>
                            <option value="1">M-rate</option>
                        </select>
                    </div>
                    <div class="col-sm-3">                    
                        <label>Dimensions</label>
                        <select class="form-control" id="rate">
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
                        <select class="form-control" id="rate">
                            <option value="0">Progressive</option>
                            <option value="1">Interlaced</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnManualFocus">Video Mode</button>
            </div>
            <div class="form-group" id="white-balance-body" v-if="this.showWhiteBalance">
                <div class="row">
                    <div class="col-sm-3">
                        <label>Color Temperature</label>
                        <input type="text" name="name" class="form-control" placeholder="Range: 2500 ~ 10000">
                    </div>
                    <div class="col-sm-3">
                        <label>Tint</label>
                        <input type="text" name="name" class="form-control" placeholder="Range: -50 ~ 50">
                    </div>
                </div>
                <button class="btn btn-primary" id="btnWhiteBalance">White Balance</button>
            </div>
            <div class="form-group" id="range-mode-body" v-if="this.showRangeMode">
                <div class="row">
                    <div class="col-sm-3">
                        <label>Range Mode</label>
                        <select class="form-control" id="rangeMode">
                            <option value="0">Film</option>
                            <option value="1">Video</option>
                            <option value="2">Extended Video</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnRangeMode">Range Mode</button>
            </div>
            <div class="form-group" id="sharpen-level-body" v-if="this.showShapenLevel">
                <div class="row">
                    <div class="col-sm-3">
                        <label>Sharpen Level</label>
                        <select class="form-control" id="sharpenLevel">
                            <option value="0">Off</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnSharpenLevel">Sharpen Level</button>
            </div>
            <div class="form-group" id="record-format-body" v-if="this.showRecordFormat">
                <div class="row">
                    <div class="col-sm-3">
                        <label>Frame rate</label>
                        <select class="form-control" id="rate">
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
                        <select class="form-control" id="rate">
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
                        <input type="text" name="name" class="form-control" placeholder="in Pixels">
                    </div>
                    <div class="col-sm-3">
                        <label>Frame Height</label>
                        <input type="text" name="name" class="form-control" placeholder="in Pixels">
                    </div>
                    <div class="col-sm-3">
                        <label>Flags</label>
                        <select class="form-control" id="flags">
                            <option value="0">file-M-rate</option>
                            <option value="1">sensor-M-rate</option>
                            <option value="2">sensor-off-speed</option>
                            <option value="3">interlaced</option>
                            <option value="4">windowed mode</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary" id="btnRecordFormat">Record Format</button>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: 'Set Video Mode',
            showVideoMode: true,
            showWhiteBalance: false,
            showRangeMode: false,
            showShapenLevel: false,
            showRecordFormat: false,
        }
    },
    mounted() {
        console.log('RecordVideo-Component mounted.')
    },
    methods: {
        videoMode: function(event) {
            this.title = "Set Video Mode";
            this.showVideoMode = true;
            this.showWhiteBalance = this.showRangeMode = this.showShapenLevel = this.showRecordFormat = false;
        },
        whiteBalance: function(event) {
            this.title = "Set White Balance";1
            this.showWhiteBalance = true;
            this.showVideoMode = this.showRangeMode = this.showShapenLevel = this.showRecordFormat = false;
        },
        rangeMode: function(event) {
            this.title = "Set Range Mode";
            this.showRangeMode = true;
            this.showVideoMode = this.showWhiteBalance = this.showShapenLevel = this.showRecordFormat = false;
        },
        shapenLevel: function(event) {
            this.title = "Set Sharpen Level";
            this.showShapenLevel = true;
            this.showVideoMode = this.showWhiteBalance = this.showRangeMode = this.showRecordFormat = false;
        },
        recordFormat: function(event) {
            this.title = "Set Record Format";
            this.showRecordFormat = true;
            this.showVideoMode = this.showWhiteBalance = this.showRangeMode = this.showShapenLevel = false;
        },
    }
}
</script>
