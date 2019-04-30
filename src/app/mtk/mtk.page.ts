import { SharingvoidService } from './../sharingvoid.service';
import { Platform, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DocumentViewerOptions, DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';

@Component({
  selector: 'app-mtk',
  templateUrl: './mtk.page.html',
  styleUrls: ['./mtk.page.scss'],
})
export class MtkPage implements OnInit {

  private filepath:string;
  private ext:string = ".pdf";

  constructor(private document: DocumentViewer,
    private file: File, private platform: Platform,
    private fileOpener: FileOpener,
    private printer: Printer,
    private toaster: ToastController,
    private me: SharingvoidService) { }

  ngOnInit() {
    this.filepath = this.file.applicationDirectory + 'www/assets/docs/';
  }

  openMtk(name: string, filename: string) {

    this.me.openToast("TEST");
    
    const options: DocumentViewerOptions = {
      title: name
    }

    if (this.platform.is('android')) {
      let tmpname = Date.now() + filename;
      this.file.copyFile(this.filepath, filename, this.file.dataDirectory, '${filename}.pdf').then(res => {
        this.fileOpener.open(res.nativeURL, 'application/pdf');
      });
    } else {
      this.document.viewDocument(this.filepath + filename, 'application/pdf', options)
    }
  }

  printDocs(filename:string) {
    this.me.printFile(filename + this.ext);
  }
}
