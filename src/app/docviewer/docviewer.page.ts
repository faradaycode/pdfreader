import { Printer } from '@ionic-native/printer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingvoidService } from '../sharingvoid.service';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.page.html',
  styleUrls: ['./docviewer.page.scss'],
})

export class DocviewerPage implements OnInit {
  pdfsrc: string;
  param: string;
  titletool: string;

  constructor(private route: ActivatedRoute, 
    private me: SharingvoidService) { 
    this.param = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log(this.param);
    this.pdfsrc = "/assets/docs/" + this.param + ".pdf";
    this.titletool = this.param.replace(/_/g, " ");
  }

  printDocs(filename: string) {
    this.me.printFile(filename + ".pdf");
  }
}
