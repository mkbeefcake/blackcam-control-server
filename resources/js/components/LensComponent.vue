<template>
<div class="card">
    <div class="card-header">
        <div class="row">
            <div class="col-sm-6 text-left">
                <h5 class="card-category">Lens</h5>
                <h2 class="card-title">{{this.title}}</h2>
            </div>
            <div class="col-sm-6">
                <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                <label class="btn btn-sm btn-primary btn-simple active" id="0" v-on:click="auto">
                    <input type="radio" name="options" checked>
                    <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Auto</span>
                    <span class="d-block d-sm-none">
                        <i class="tim-icons icon-single-02"></i>
                    </span>
                </label>
                <label class="btn btn-sm btn-primary btn-simple active" id="1" v-on:click="focus">
                    <input type="radio" name="options">
                    <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Focus</span>
                    <span class="d-block d-sm-none">
                        <i class="tim-icons icon-single-02"></i>
                    </span>
                </label>
                <label class="btn btn-sm btn-primary btn-simple" id="2" v-on:click="aperture">
                    <input type="radio" class="d-none d-sm-none" name="options">
                    <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Aperture</span>
                    <span class="d-block d-sm-none">
                        <i class="tim-icons icon-gift-2"></i>
                    </span>
                </label>
                <label class="btn btn-sm btn-primary btn-simple" id="3" v-on:click="zoom">
                    <input type="radio" class="d-none" name="options">
                    <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Zoom</span>
                    <span class="d-block d-sm-none">
                        <i class="tim-icons icon-tap-02"></i>
                    </span>
                </label>
                <label class="btn btn-sm btn-primary btn-simple" id="4" v-on:click="stabilisation">
                    <input type="radio" class="d-none" name="options">
                    <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Stabilisation</span>
                    <span class="d-block d-sm-none">
                        <i class="tim-icons icon-tap-02"></i>
                    </span>
                </label>
                </div>
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="form-group" id="auto-focus-body" v-if="this.showAuto">
            <button class="btn btn-primary" id="btnAutoFocus" v-on:click="setAutoFocus">Auto Focus</button>
        </div>
        <div class="form-group" id="manual-focus-body" v-if="this.showManual">
            <div class="row">
                <div class="col-sm-3">
                    <label>Manual Focus </label>
                    <input type="text" v-model="manualFocusValue" class="form-control" placeholder="Range: 0.0 ~ 1.0">
                </div>
            </div>
            <button class="btn btn-primary" id="btnManualFocus" v-on:click="setManualFocus">Manual Focus</button>
        </div>
        <div class="table-responsive ps" id="aperture-body" v-if="this.showAperture">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Aperture (f-stop)</td>
                        <td><input type="text" class="form-control" v-model="apertureFStop" placeholder="Range: -1.0 ~ 16.0"></td>
                        <td><button class="btn btn-primary" id="btnSetFStop" v-on:click="setApertureFStop">Set</button></td>
                    </tr>
                    <tr>
                        <td>Aperture (normalised)</td>
                        <td><input type="text" class="form-control" v-model="apertureNormalised" placeholder="Range: 0.0 ~ 1.0"></td>
                        <td><button class="btn btn-primary" id="btnSetNormalised" v-on:click="setApertureNormalised">Set</button></td>
                    </tr>
                    <tr>
                        <td>Aperture (ordinal)</td>
                        <td><input type="text" class="form-control" v-model="apertureOrdinal" placeholder="Range: 0.0 ~ n"></td>
                        <td><button class="btn btn-primary" id="btnSetOrdinal" v-on:click="setApertureOrdinal">Set</button></td>
                    </tr>
                    <tr>
                        <td>Instantaneous auto Aperture</td>
                        <td>-</td>
                        <td><button class="btn btn-primary" id="btnAutoAperture" v-on:click="setAutoAperture">Set</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="form-group" id="zoom-body" v-if="this.showZoom">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Set absolute zoom (mm)</td>
                        <td><input type="text" class="form-control" v-model="absoluteZoomMM" placeholder="Range: 0.0 ~ max"></td>
                        <td><button class="btn btn-primary" id="btnSetZoomMM" v-on:click="setAbsoluteZoomMM" >Set</button></td>
                    </tr>
                    <tr>
                        <td>Set absolute zoom (normalised)</td>
                        <td><input type="text" class="form-control" v-model="absoluteZoomNormalised" placeholder="Range: 0.0 ~ 1.0"></td>
                        <td><button class="btn btn-primary" id="btnZoomNormalised" v-on:click="setAbsoluteZoomNormalised">Set</button></td>
                    </tr>
                    <tr>
                        <td>Set continuous zoom (speed)</td>
                        <td><input type="text" class="form-control" v-model="continuousZoomSpeed" placeholder="Range: -0.0 ~ 1.0"></td>
                        <td><button class="btn btn-primary" id="btnZoomSpeed" v-on:click="setContinuousZoomSpeed">Set</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="form-group" id="stabilisation-body" v-if="this.showStabilisation">
            <button class="btn btn-primary" id="btnEnableStabilisation" v-on:click="enableStabilisation">Enable</button>
            <button class="btn btn-primary" id="btnDisableStabilisation" v-on:click="disableStabilisation">Disable</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Set Auto Focus',
            showAuto: true,
            showManual: false,
            showAperture: false,
            showZoom: false,
            showStabilisation: false,
        }
    },
    mounted() {
        console.log('Lens-Component mounted.')
    },
    methods: {
        auto: function(event) {
            this.title = "Set Auto Focus";
            this.showAuto = true;
            this.showManual = this.showAperture = this.showZoom = this.showStabilisation = false;
        },
        focus: function(event) {
            this.title = "Manual Focus";
            this.showManual = true;
            this.showAuto = this.showAperture = this.showZoom = this.showStabilisation = false;
        },
        aperture: function(event) {
            this.title = "Aperture";
            this.showAperture = true;
            this.showAuto = this.showManual = this.showZoom = this.showStabilisation = false;
        },
        zoom: function(event) {
            this.title = "Zoom";
            this.showZoom = true;
            this.showAuto = this.showManual = this.showAperture = this.showStabilisation = false;
        },
        stabilisation: function(event) {
            this.title = "Stabilisation";
            this.showStabilisation = true;
            this.showAuto = this.showManual = this.showAperture = this.showZoom = false;
        },
        sendLensCommand: function(command) {
            if (selectedCameraId == "")
                socket.emit('admin', null, JSON.stringify(command));
            else
                socket.emit('admin', selectedCameraId, JSON.stringify(command));
        },
        setAutoFocus: function(event) {
            debugger;
            var command = {
                type : 'auto-focus'
            };
            
            this.sendLensCommand(command);
            alert('Sent Auto-Focus command');
        },
        setManualFocus: function(event) {
            debugger;
            var command = {
                type : 'manual-focus',
                manualFocus: this.manualFocusValue,
            };

            this.sendLensCommand(command);
            alert('Sent Manual-Focus command');
        },
        setApertureFStop: function(event) {
            debugger;
            var command = {
                type : 'aperture-fstop',
                apertureFStop: this.apertureFStop
            };

            this.sendLensCommand(command);
            alert('Sent Aperture (f-Stop) command');
        },
        setApertureNormalised: function(event) {
            debugger;
            var command = {
                type : 'aperture-normalised',
                apertureNormalised: this.apertureNormalised
            };

            this.sendLensCommand(command);
            alert('Sent Aperture (Normalised) command');
        },
        setApertureOrdinal: function(event) {
            debugger;
            var command = {
                type : 'aperture-ordinal',
                apertureOrdinal: this.apertureOrdinal
            };

            this.sendLensCommand(command);
            alert('Sent Aperture (Ordinal) command');
        },
        setAutoAperture: function(event) {
            debugger;
            var command = {
                type : 'auto-aperture',
            };

            this.sendLensCommand(command);
            alert('Sent Auto aperture command');
        },
        setAbsoluteZoomMM: function(event) {
            debugger;
            var command = {
                type : 'absolute-zoom-mm',
                absoluteZoomMM: this.absoluteZoomMM
            };

            this.sendLensCommand(command);
            alert('Sent Absolute Zoom (mm) command');
        },
        setAbsoluteZoomNormalised: function(event) {
            debugger;
            var command = {
                type : 'absolute-zoom-normalised',
                absoluteZoomNormalised: this.absoluteZoomNormalised
            };

            this.sendLensCommand(command);
            alert('Sent Absolute Zoom (Normalised) command');
        },
        setContinuousZoomSpeed: function(event) {
            debugger;
            var command = {
                type : 'continuous-zoom-speed',
                continuousZoomSpeed: this.continuousZoomSpeed
            };

            this.sendLensCommand(command);
            alert('Sent Continuous Zoom (Speed) command');
        },
        enableStabilisation: function(event) {
            debugger;
            var command = {
                type : 'enable-stabilisation',
            };

            this.sendLensCommand(command);
            alert('Sent Enable Stabilisation command');
        },
        disableStabilisation: function(event) {
            debugger;
            var command = {
                type : 'disable-stabilisation',
            };

            this.sendLensCommand(command);
            alert('Sent Disable Stabilisation command');
        }
    }
}
</script>
