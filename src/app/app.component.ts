import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from './interface/kavithai';
import { KavithaiServiceService } from './service/kavithai-service.service';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { adMob } from 'src/environments/environment';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit {
  categoryList:Observable<category[]>;
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private kavithaiService:KavithaiServiceService,
    private adMob:AdMobPro, private platform: Platform, private fcm:FCM,
    public alert:AlertController,private toastCtrl:ToastController) {
     
      this.platform.ready().then( () => {
        this.initializeAPP();
      });
    }

  async ngOnInit() {
    this.banner();
    this.categoryList = this.kavithaiService.getAllCategories();   
  }

  banner() {
    let adId = adMob.banner;
    this.adMob.createBanner({
      adId: adId,
      autoShow:true,
     //isTesting: true // remove in production 
    })
      .then(() => {
        this.adMob.showBanner(this.adMob.AD_POSITION.BOTTOM_CENTER);
      })
      .catch( (err) => {
       // await this.presentAlert(err);
      });
  }

  
  async presentAlert(err:any) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Error Occurred',
      message: 'Please try again later.'+err,
      buttons: ['OK']
    });
    await alert.present();
  }
initializeAPP(){
  this.fcm.onNotification().subscribe(async data => {
    if (data.wasTapped) {
      console.log("Received in background");
    } else {
      console.log("Received in foreground");
      // display toast
      const notificationToast = await this.toastCtrl.create({
        message:(<any>data).body,
        position: 'top',
        buttons: [
          {
            role: 'cancel',
            text: 'Ignore'
          }
        ]
      });
    await notificationToast.present();
    };
  });
}
}
