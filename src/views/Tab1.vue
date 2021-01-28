<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>CameraPreview</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content  id="content" class="content-camera-preview" :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Camera Preview</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="flipCamera()"
          >flip
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="stopCamera()"
          >stop
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <!-- fab placed to the bottom start -->
      <ion-fab vertical="bottom" horizontal="start" slot="fixed">
        <ion-fab-button v-on:click="camera()"
          >camera
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
<style>
  ion-content{
    --background:transparent;
  }
</style>

<script lang="ts">
import {
  camera,
  trash,
  close,
  eye,
  refresh,
  square,
  settings,
  happy,
} from "ionicons/icons";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { Camera, Plugins } from "@capacitor/core";
const { CameraPreview, Filesystem, Storage } = Plugins;
import {
  CameraPreviewOptions,
  CameraPreviewPictureOptions,
} from "@capacitor-community/camera-preview";

import "@capacitor-community/camera-preview";

export default {
  name: "Tab1",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },

  methods: {
    camera() {
      Plugins.CameraPreview.start({
        parent: "content",
        toBack: true,
        position: "front",
      });
      console.log("camera front");
    },
    stopCamera() {
      Plugins.CameraPreview.stop();
      console.log("stop");
    },
    flipCamera() {
      Plugins.CameraPreview.flip();
      console.log("flip");
    },
    // async captureImage() {
    //   const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
    //     quality: 90,
    //   };

    //   const result = await CameraPreview.capture(cameraPreviewPictureOptions);
    //   this.arrayImg.push(`data:image/jpeg;base64,${result.value}`);
    //   //this.image= `data:image/jpeg;base64,${result.value}`;
    //   this.stopCamera();
    // },
  },
};
</script>
