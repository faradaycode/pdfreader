import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Printer } from '@ionic-native/printer/ngx';
import { SharingvoidService } from '../sharingvoid.service';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-ipa',
  templateUrl: './ipa.page.html',
  styleUrls: ['./ipa.page.scss'],
})
export class IpaPage implements OnInit {

  private filepath:string;
  private ext:string = ".pdf";
  mYears: any = [];

  constructor(
    private file: File, 
    private platform: Platform,
    private printer: Printer,
    private me: SharingvoidService) { }

  ngOnInit() {
    this.filepath = this.file.applicationDirectory + 'www/assets/docs/';
    this.mYears = ["2014", "2015", "2016", "2017", "2018"];
  }

  printDocs(filename:string) {
    this.me.printFile(filename + this.ext);
  }

}
