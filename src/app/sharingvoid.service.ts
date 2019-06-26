import { File } from '@ionic-native/file/ngx';
import { PrintOptions, Printer } from '@ionic-native/printer/ngx';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharingvoidService {

  public mYears:any = ["2014", "2015", "2016", "2017", "2018"];
  
  constructor(
    private toaster: ToastController,
    private file: File,
    private router: Router,
    private printer: Printer) { }

  public async openToast(message:string) {
    const toast = await this.toaster.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  public printFile(filename:string) {

    let afterRegex = filename.replace(/_/g, " ");
    
    let options: PrintOptions = {
      name: afterRegex,
      duplex: true,
      landscape: true,
      grayscale: true
    }

    this.file.copyFile(this.file.applicationDirectory + 'www/assets/docs/', filename, this.file.dataDirectory, filename)
      .then(res => {
        this.printer.print(res.nativeURL, options).then(onSuccess => {
          console.log("Done =>" + onSuccess);
        }, onError => {
          console.log("Error=>" + onError);
        });
      });
    }
    
    public viewDocument(filename:string, tag: string) {
      this.router.navigate(['/docviewer', {doc: filename, tag: tag}]);
    }
  }
