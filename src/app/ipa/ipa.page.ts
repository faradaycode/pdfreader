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

  openIpa(filename: string, tag: string) {
    this.me.viewDocument(filename, tag);
  }
}