import { Component } from '@angular/core';
import { FirebaseService } from 'src/providers/firebase.service';

@Component({
  selector: 'app-versoes-home',
  templateUrl: 'versoes.page.html',
  styleUrls: ['versoes.page.scss']
})
export class VersoesPage {

  versions: any = [
    {
      version: 'acf',
      downloaded: false,
      downloading: false
    },
    {
      version: 'bbe',
      downloaded: false,
      downloading: false
    },
    {
      version: 'kjv',
      downloaded: false,
      downloading: false
    },
    {
      version: 'nvi',
      downloaded: false,
      downloading: false
    },
    {
      version: 'ra',
      downloaded: false,
      downloading: false
    }
  ];

  progess: number = 0.0;

  constructor(private firebaseService: FirebaseService) {

  }

  downloadVersion(version: any, index: number) {
    this.firebaseService.downloadVersion(version).subscribe(data => {
      console.log(data);
      /*data.map(item => {
        console.log(item);
        return {
          ...item.payload.doc.data()
        };
      });*/
    });

    for (let i = 0; i <= 100; i++) {
      this.progess = i / 100;
      this.versions[index].downloading = true;
    }
    this.versions[index].downloaded = true;
  }
}
