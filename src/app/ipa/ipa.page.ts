import { Component, OnInit } from '@angular/core';
import { SharingvoidService } from '../sharingvoid.service';

@Component({
  selector: 'app-ipa',
  templateUrl: './ipa.page.html',
  styleUrls: ['./ipa.page.scss'],
})
export class IpaPage implements OnInit {
  bYears: any;

  constructor(private me: SharingvoidService) { }

  ngOnInit() {
    this.bYears = this.me.mYears;
  }

  printIpa(filename:string) {
    this.me.printFile(filename + ".pdf");
  }

  openIpa(filename: string) {
    this.me.viewDocument(filename);
  }
}