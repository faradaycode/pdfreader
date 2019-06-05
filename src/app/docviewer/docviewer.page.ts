import { File } from '@ionic-native/file/ngx';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.page.html',
  styleUrls: ['./docviewer.page.scss'],
})

export class DocviewerPage implements OnInit {
  pdfsrc: string;
  constructor(private file: File) { }

  ngOnInit() {
    this.pdfsrc = "/assets/docs/soal_mtk_2014.pdf";
  }
}
