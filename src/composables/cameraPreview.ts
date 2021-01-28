import { Camera, Plugins } from "@capacitor/core"
const { CameraPreview } = Plugins;
import { CameraPreviewOptions } from '@capacitor-community/camera-preview';

import '@capacitor-community/camera-preview'

export function cameraPreview() {

    var image=null;
    var cameraActive=false;
    var tochActive=false;

    
    const cameraFront = () => {

        console.log("hola")
         Plugins.CameraPreview.start({
             parent: "content",
             toBack: true,
             position: "rear"
         });
    }

    const openCamera=()=>{
        const cameraPreviewOptions:CameraPreviewOptions={
            position:'rear',
            parent:'cameraPreview',
            className:'cameraPreview'
        };
        CameraPreview.start(cameraPreviewOptions);
        cameraActive=true;
    }

    return {
        cameraFront,
        openCamera
    };
}
