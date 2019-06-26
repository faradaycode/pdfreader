import { AppRate } from "@ionic-native/app-rate/ngx";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SharingvoidService } from "../sharingvoid.service";

@Component({
  selector: "app-docviewer",
  templateUrl: "./docviewer.page.html",
  styleUrls: ["./docviewer.page.scss"]
})
export class DocviewerPage implements OnInit {
  pdfsrc: string;
  param_file: string;
  param_tag: string;
  titletool: string;
  appname: string;

  constructor(
    private route: ActivatedRoute,
    private me: SharingvoidService,
    private appRate: AppRate
  ) {
    this.param_file = this.route.snapshot.paramMap.get("doc");
    this.param_tag = this.route.snapshot.paramMap.get("tag");    
  }

  ngOnInit() {
    this.pdfsrc = "/assets/docs/" + this.param_file + ".pdf";
    this.titletool = this.param_file.replace(/_/g, " ");

    this.appRate.preferences = {
      displayAppName: "Soal Bahas UN MIPA SMP",
      usesUntilPrompt: 3,
      simpleMode: true,
      storeAppURL: {
        android: "market://details?id=com.magentamedia.soalunsmp"
      },
      customLocale: {
        title: "Enjoy %@?",
        message: "Would you mind to rate it?",
        cancelButtonLabel: "No",
        laterButtonLabel: "Later",
        rateButtonLabel: "Rate It"
      }
    };

    this.appRate.promptForRating(false);
  }

  printDocs(filename: string) {
    this.me.printFile(filename + ".pdf");
  }
}
