import { AppRate } from "@ionic-native/app-rate/ngx";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { Router } from "@angular/router";
import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private orientation: ScreenOrientation
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // let status bar overlay webview
      this.statusBar.overlaysWebView(false);
      // set status bar to white
      this.statusBar.backgroundColorByHexString("#2e7c5a");
      //set potrait
      this.orientation.lock(this.orientation.ORIENTATIONS.PORTRAIT);
      //hide splash
      this.splashScreen.hide();
    });

    this.platform.backButton.subscribe(() => {
      if (
        this.router.url === "/home/mtk" ||
        this.router.url === "/home/ipa" ||
        this.router.url === "/home/theinfo"
      ) {
        navigator["app"].exitApp();
      } else {
        this.router.navigate(["/"]);
      }
    });
  }
}
