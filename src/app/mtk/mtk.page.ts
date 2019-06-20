import { SharingvoidService } from "./../sharingvoid.service";
import { Component, OnInit } from "@angular/core";
import { File } from "@ionic-native/file/ngx";
import { Printer, PrintOptions } from "@ionic-native/printer/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-mtk",
  templateUrl: "./mtk.page.html",
  styleUrls: ["./mtk.page.scss"]
})
export class MtkPage implements OnInit {
  mYears: any = [];

  constructor(private me: SharingvoidService) {}

  ngOnInit() {
    this.mYears = this.me.mYears;
  }

  openMtk(filename: string) {
    this.me.viewDocument(filename);
  }

  printMtk(filename: string) {
    this.me.printFile(filename + ".pdf");
  }
}
 