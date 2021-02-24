export default {
    refreshCameraList(state, cameraList) {
        for (const [key, value] of Object.entries(cameraList)) {
            var cameraId = key;
            var cameraObject = value;

            const camera = state.cameras.find(u => u.cameraId === cameraId);
            if (camera == undefined) 
                state.cameras = [...state.cameras, {cameraId: cameraId}];
    
            const index = state.cameras.findIndex(_ => _.cameraId === cameraId);
            state.cameras[index].cameraName = cameraObject.cameraName;
        }
    },
    updateCameraStatusCode(state, {socketId, statusObject}) {
        console.log("VueX.store.updateCameraStatus Code is called");

        var cameraId = socketId;                
        const camera = state.cameras.find(u => u.cameraId === cameraId);
        if (camera == undefined) 
            state.cameras = [...state.cameras, {cameraId: cameraId}];

        const index = state.cameras.findIndex(_ => _.cameraId === cameraId);

        //  camera = statusObject;
        if (statusObject.type == "aperture-fstop") {
            state.cameras[index].apertureFStop = statusObject.apertureFStop;
        }
        else if (statusObject.type == "aperture-normalised") {
            state.cameras[index].apertureNormalised = statusObject.apertureNormalised;
        }
        else if (statusObject.type == "absolute-zoom-mm") {
            state.cameras[index].absoluteZoomMM = statusObject.absoluteZoomMM;
        }
        else if (statusObject.type == "set-iso") {
            state.cameras[index].isoValue = statusObject.isoValue;
        }
        else if (statusObject.type == "range-mode") {
            state.cameras[index].rangeMode = statusObject.rangeMode;
        }
        else if (statusObject.type == "display-lut") {
            state.cameras[index].selectedLUT = statusObject.selectedLUT;
            state.cameras[index].lutStatus = statusObject.lutStatus;
        }
        else if (statusObject.type == "sharpen-level") {
            state.cameras[index].sharpenLevel = statusObject.sharpenLevel;
        }
        else if (statusObject.type == "record-format") {
            state.cameras[index].recordFrameRate = statusObject.recordFrameRate;
            state.cameras[index].recordSensorFrameRate = statusObject.recordSensorFrameRate;
            state.cameras[index].recordFrameWidth = statusObject.recordFrameWidth;
            state.cameras[index].recordFrameHeight = statusObject.recordFrameHeight;
            state.cameras[index].recordFlags = statusObject.recordFlags;
        }
        else if (statusObject.type == "shutter-angle") {
            state.cameras[index].shutterAngleValue = statusObject.shutterAngleValue;
        }
        else if (statusObject.type == "auto-exposure") {
            state.cameras[index].autoExposureValue = statusObject.autoExposureValue;
        }
        else if (statusObject.type == "video-mode") {
            state.cameras[index].frameRate = statusObject.frameRate;
            state.cameras[index].mRate = statusObject.mRate;
            state.cameras[index].dimensions = statusObject.dimensions;
            state.cameras[index].interlaced = statusObject.interlaced;
        }
        else if (statusObject.type == "white-balance") {
            state.cameras[index].colorTemperature = statusObject.colorTemperature;
            state.cameras[index].tint = statusObject.tint;
        }
        else if (statusObject.type == "shutter-speed") {
            state.cameras[index].shutterSpeedValue = statusObject.shutterSpeedValue;
        }
        else if (statusObject.type == "set-transportmode") {
            state.cameras[index].transportModeValue = statusObject.transportModeValue;
            state.cameras[index].transportSpeedValue = statusObject.transportSpeedValue;
            state.cameras[index].transportFlagsValue = statusObject.transportFlagsValue;
            state.cameras[index].slot1StorageValue = statusObject.slot1StorageValue;
            state.cameras[index].slot2StorageValue = statusObject.slot2StorageValue;
        }
        else if (statusObject.type == "set-transportmode") {
            state.cameras[index].basicCodecValue = statusObject.basicCodecValue;
            state.cameras[index].codeVariantValue = statusObject.codeVariantValue;
        }


    }
}