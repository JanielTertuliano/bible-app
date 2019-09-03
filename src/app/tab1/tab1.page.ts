import { Component } from '@angular/core';
import { BibleapiService } from 'src/providers/bibleapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  books: any = [];
  arrayBooks: any = [];

  constructor(private bibleApi: BibleapiService, private router: Router) {
    this.getBooks();
  }

  getBooks() {
    this.bibleApi.getBooks().subscribe(data => {
      this.books = data;
      this.arrayBooks = this.books;
    }, err => {
      console.log(err);
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
    this.router.navigate(['/tabs/tab2'], { queryParams: book });
  }
}
