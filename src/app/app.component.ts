import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  public pages: Array<{title: string, component: any, icons: any }>;
  public photo: any = 'assets/image/VMD.jpg';

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public storage: Storage
  ) {

    this.storage.get('vmdStorage').then((vmdStorage) => {
      if (vmdStorage == null || vmdStorage == undefined) {
        this.rootPage = 'LoginPage';
      } else {
        this.nav.setRoot('HomePage');
      }
    });

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Dasboard', component: HomePage,  icons: 'home' },
      { title: 'About Us', component: 'ProfilePage', icons: 'md-help-circle' },
      { title: 'Team', component: 'TeamPage', icons: 'contacts' },
      { title: 'Product', component: 'ProductPage', icons: 'md-document' },
      { title: 'Booking System', component: 'BookingSystemPage', icons: 'md-cart'},
      { title: 'Member', component: 'MemberPage', icons: 'md-contact'}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.storage.clear();
    this.nav.setRoot("LoginPage");
  }

  onprofile(){
    this.nav.setRoot("PageProfileOnBookingPage");
  }
}
