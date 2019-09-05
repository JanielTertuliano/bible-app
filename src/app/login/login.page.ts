import { Component, OnInit } from '@angular/core';
import { BibleapiService } from 'src/providers/bibleapi.service';
import { FirebaseService } from 'src/providers/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  progess: boolean;
  log: any;
  books: any = [];
  constructor(private bibleApi: BibleapiService,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {

  }

  insertBooks() {
    this.progess = true;
    let i = 1;
    this.bibleApi.getBooks().subscribe(data => {
      this.books = data;
      for (let item of this.books) {
        item.order = i;
        this.firebaseService.insertBooks(item).then(res => {
          this.log = item.name + '  ' + i;
        });
        i = i + 1;
      }
    });
  }

  getBooks() {
    this.firebaseService.getBooks().subscribe(data => {
      let array = [];
      array = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      });
      console.table(array);
    });
  }

  insertChaptersBook() {
    this.progess = true;
    for (let i = 1; i <= 50; i++) {
      console.log(i);
    }
  }
}
