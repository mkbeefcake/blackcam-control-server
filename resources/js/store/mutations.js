export default {
    updateCameraStatusCode(state, {socketId, statusObject}) {
        console.log("VueX.store.updateCameraStatus Code is called");

        var cameraId = socketId;
        
        //  state.cameras[cameraId] = statusObject;
        if (statusObject.type == "aperture-fstop") {
            state.cameras[cameraId].apertureFStop = statusObject.apertureFStop;
        }
        else if (statusObject.type == "aperture-normalised") {
            state.cameras[cameraId].apertureNormalised = statusObject.apertureNormalised;
        }
        else if (statusObject.type == "absolute-zoom-mm") {
            state.cameras[cameraId].absoluteZoomMM = statusObject.absoluteZoomMM;
        }
        else if (statusObject.type == "set-iso") {
            state.cameras[cameraId].isoValue = statusObject.isoValue;
        }
        else if (statusObject.type == "range-mode") {
            state.cameras[cameraId].rangeMode = statusObject.rangeMode;
        }
        else if (statusObject.type == "display-lut") {
            state.cameras[cameraId].selectedLUT = statusObject.selectedLUT;
            state.cameras[cameraId].lutStatus = statusObject.lutStatus;
        }
        else if (statusObject.type == "sharpen-level") {
            state.cameras[cameraId].sharpenLevel = statusObject.sharpenLevel;
        }
        else if (statusObject.type == "record-format") {
            state.cameras[cameraId].recordFrameRate = statusObject.recordFrameRate;
            state.cameras[cameraId].recordSensorFrameRate = statusObject.recordSensorFrameRate;
            state.cameras[cameraId].recordFrameWidth = statusObject.recordFrameWidth;
            state.cameras[cameraId].recordFrameHeight = statusObject.recordFrameHeight;
            state.cameras[cameraId].recordFlags = statusObject.recordFlags;
        }
        else if (statusObject.type == "shutter-angle") {
            state.cameras[cameraId].shutterAngleValue = statusObject.shutterAngleValue;
        }
        else if (statusObject.type == "auto-exposure") {
            state.cameras[cameraId].autoExposureValue = statusObject.autoExposureValue;
        }
        else if (statusObject.type == "video-mode") {
            state.cameras[cameraId].frameRate = statusObject.frameRate;
            state.cameras[cameraId].mRate = statusObject.mRate;
            state.cameras[cameraId].dimensions = statusObject.dimensions;
            state.cameras[cameraId].interlaced = statusObject.interlaced;
        }
        else if (statusObject.type == "white-balance") {
            state.cameras[cameraId].colorTemperature = statusObject.colorTemperature;
            state.cameras[cameraId].tint = statusObject.tint;
        }
        else if (statusObject.type == "shutter-speed") {
            state.cameras[cameraId].shutterSpeedValue = statusObject.shutterSpeedValue;
        }
        else if (statusObject.type == "set-transportmode") {
            state.cameras[cameraId].transportModeValue = statusObject.transportModeValue;
            state.cameras[cameraId].transportSpeedValue = statusObject.transportSpeedValue;
            state.cameras[cameraId].transportFlagsValue = statusObject.transportFlagsValue;
            state.cameras[cameraId].slot1StorageValue = statusObject.slot1StorageValue;
            state.cameras[cameraId].slot2StorageValue = statusObject.slot2StorageValue;
        }
        else if (statusObject.type == "set-transportmode") {
            state.cameras[cameraId].basicCodecValue = statusObject.basicCodecValue;
            state.cameras[cameraId].codeVariantValue = statusObject.codeVariantValue;
        }


    }
}