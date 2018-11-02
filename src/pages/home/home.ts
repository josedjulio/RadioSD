import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StreamingMedia,  StreamingAudioOptions } from '@ionic-native/streaming-media';
//import { Title } from '@angular/platform-browser';
import { BackgroundMode } from '@ionic-native/background-mode';
//import { NativeAudio } from '@ionic-native/native-audio';

//import { Media, MediaObject} from '@ionic-native/media';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  

  constructor(public navCtrl:NavController, private streamingMedia: StreamingMedia,
    private backgroundMode : BackgroundMode, public plt: Platform) {

            plt.ready().then(() => {
              this.backgroundMode.enable();
            
            });
      }
  
    
   
  startAudio()
  {
  let options: StreamingAudioOptions =
    {
    successCallback:()=>{console.log()},
    errorCallback:()=>{console.log()},
    initFullscreen:false
    }
    
    //this.backgroundMode.enable();
    this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3',options); 
    
  }

}
