import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  public web() {
    this.navCtrl.push('DetailprodukPage', {
      picture: 'assets/image/webdevelop.png',
      header: 'Website Sistem',
      titleProduct: 'Website Sistem',
      description: 'A mobile browser is a web browser designed for use on a mobile device such as a mobile phone or PDA. Mobile browsers are optimized so as to display Web content most effectively for small screens on portable devices. Mobile browser software must be small and efficient to accommodate the low memory capacity and low-bandwidth of wireless handheld devices. Typically they were stripped-down web browsers, but some more modern mobile browsers can handle more recent technologies like CSS 2.1, JavaScript, and Ajax.'
    });
  }

  public android() {
      this.navCtrl.push('DetailprodukPage', {
        picture: 'assets/image/Android.jpg',
        header: 'Android Sistem',
        titleProduct: 'Android Sistem',
        description: 'A mobile software application developed for use on devices powered by Googles Android platform.  Android apps are available in the Google Play Store (formerly known as the Android Market), in the Amazon Appstore and on various Android App-focused sites, and the apps can run on Android smartphones, tablets, Google TV and other devices.'
      });

  }

  public ios() {
    this.navCtrl.push('DetailprodukPage', {
      picture: 'assets/image/IOS.jpg',
      header: 'Ios Sistem',
      titleProduct: 'Ios Sistem',
      description: 'iOS (formerly iPhone OS) is a mobile operating system created and developed by Apple Inc. exclusively for its hardware. It is the operating system that presently powers many of the companys mobile devices, including the iPhone, iPad, and iPod Touch. It is the second most popular mobile operating system globally after Android.'
    });

}
  
}
