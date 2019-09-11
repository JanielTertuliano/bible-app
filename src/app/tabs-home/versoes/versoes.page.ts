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

  _downloadVersion(item: any, index: number) {

    for (let i = 0; i <= 100; i++) {
      this.progess = i / 100;
      this.versions[index].downloading = true;
    }
    this.versions[index].downloaded = true;
  }



  downloadVersion(version: any) {
    let books = [];

    this.firebaseService.getBooks().subscribe(res => {
      res.map(book => {
        let docBook = {
          id: book.payload.doc.id,
          ...book.payload.doc.data()
        };
        this.firebaseService.downloadVersion(version, docBook).subscribe(res => {
          res.forEach((item, index) => {

            let content = {
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            };

            this.progess += .1;
          });

        });
      });
    });
  }

  getVersions() {
    this.firebaseService.getVersions().subscribe(data => {
      console.log(data);
    });
  }

}
