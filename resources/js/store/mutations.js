export default {
    updateCameraStatusCode(state, {cameraId, statusObject}) {
        console.log("VueX.store.updateCameraStatus Code is called");
        
        //  cameras[cameraId] = statusObject;
        if (statusObject.type == "aperture-fstop") {
            cameras[cameraId].apertureFStop = statusObject.apertureFStop;
        }
        else if (statusObject.type == "aperture-normalised") {
            cameras[cameraId].apertureNormalised = statusObject.apertureNormalised;
        }
        else if (statusObject.type == "absolute-zoom-mm") {
            cameras[cameraId].absoluteZoomMM = statusObject.absoluteZoomMM;
        }
        else if (statusObject.type == "set-iso") {
            cameras[cameraId].isoValue = statusObject.isoValue;
        }
        else if (statusObject.type == "range-mode") {
            cameras[cameraId].rangeMode = statusObject.rangeMode;
        }
        else if (statusObject.type == "display-lut") {
            cameras[cameraId].selectedLUT = statusObject.selectedLUT;
            cameras[cameraId].lutStatus = statusObject.lutStatus;
        }
        else if (statusObject.type == "sharpen-level") {
            cameras[cameraId].sharpenLevel = statusObject.sharpenLevel;
        }
        else if (statusObject.type == "record-format") {
            cameras[cameraId].recordFrameRate = statusObject.recordFrameRate;
            cameras[cameraId].recordSensorFrameRate = statusObject.recordSensorFrameRate;
            cameras[cameraId].recordFrameWidth = statusObject.recordFrameWidth;
            cameras[cameraId].recordFrameHeight = statusObject.recordFrameHeight;
            cameras[cameraId].recordFlags = statusObject.recordFlags;
        }
        else if (statusObject.type == "shutter-angle") {
            cameras[cameraId].shutterAngleValue = statusObject.shutterAngleValue;
        }
        else if (statusObject.type == "auto-exposure") {
            cameras[cameraId].autoExposureValue = statusObject.autoExposureValue;
        }
        else if (statusObject.type == "video-mode") {
            cameras[cameraId].frameRate = statusObject.frameRate;
            cameras[cameraId].mRate = statusObject.mRate;
            cameras[cameraId].dimensions = statusObject.dimensions;
            cameras[cameraId].interlaced = statusObject.interlaced;
        }
        else if (statusObject.type == "white-balance") {
            cameras[cameraId].colorTemperature = statusObject.colorTemperature;
            cameras[cameraId].tint = statusObject.tint;
        }
        else if (statusObject.type == "shutter-speed") {
            cameras[cameraId].shutterSpeedValue = statusObject.shutterSpeedValue;
        }
        else if (statusObject.type == "set-transportmode") {
            cameras[cameraId].transportModeValue = statusObject.transportModeValue;
            cameras[cameraId].transportSpeedValue = statusObject.transportSpeedValue;
            cameras[cameraId].transportFlagsValue = statusObject.transportFlagsValue;
            cameras[cameraId].slot1StorageValue = statusObject.slot1StorageValue;
            cameras[cameraId].slot2StorageValue = statusObject.slot2StorageValue;
        }
        else if (statusObject.type == "set-transportmode") {
            cameras[cameraId].basicCodecValue = statusObject.basicCodecValue;
            cameras[cameraId].codeVariantValue = statusObject.codeVariantValue;
        }


    }
}