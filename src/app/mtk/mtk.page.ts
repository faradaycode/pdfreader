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
  private filepath: string;
  private ext: string = ".pdf";
  mYears: any = [];

  constructor(
    private file: File,
    private router: Router,
  ) {}

  ngOnInit() {
    this.filepath = this.file.applicationDirectory + "www/assets/docs/";
    this.mYears = ["2014", "2015", "2016", "2017", "2018"];
  }

  openDoc(filename: string) {
    this.router.navigateByUrl('/docviewer/' + filename);
    console.log(filename);
  }
}
