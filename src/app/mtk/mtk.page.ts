import { SharingvoidService } from "./../sharingvoid.service";
import { Component, OnInit } from "@angular/core";

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

  openMtk(filename: string, tag: string) {
    this.me.viewDocument(filename, tag);
  }
}
