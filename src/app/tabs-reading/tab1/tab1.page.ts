import { Component } from '@angular/core';
import { BibleapiService } from 'src/providers/bibleapi.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/providers/firebase.service';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  books: any = [];
  arrayBooks: any = [];

  constructor(
    private tabs: TabsPage,
    private router: Router,
    private firebaseService: FirebaseService) {
    this.getBooks();
  }

  ionViewDidEnter() {
    this.tabs.setTitle('Livro');
  }

  getBooks() {
    this.firebaseService.getBooks().subscribe(data => {
      this.books = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      });
      this.arrayBooks = this.books;
    });
  }

  filterBooks(event) {
    this.arrayBooks = this.books;

    const query = event.target.value;
    requestAnimationFrame(() => {
      if (query && query.trim() !== '') {
        this.arrayBooks = this.books.filter((item) => {
          return (item.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
        });
      }
    });
  }

  selectBook(book) {
    this.router.navigate(['/tabs-home/tabs-reading/capitulos'], { queryParams: book });
  }
}
