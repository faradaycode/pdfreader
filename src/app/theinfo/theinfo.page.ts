import { Component, OnInit } from "@angular/core";
import { AppVersion } from "@ionic-native/app-version/ngx";

@Component({
  selector: "app-theinfo",
  templateUrl: "./theinfo.page.html",
  styleUrls: ["./theinfo.page.scss"]
})
export class TheinfoPage implements OnInit {
  vers: string;
  nama: string;

  constructor(private apver: AppVersion) {}

  ngOnInit() {
    this.apver.getVersionNumber().then(res => {
      this.vers = res;
    });

    this.apver.getAppName().then(res => {
      this.nama = res;
    });
  }
}
