import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibleapiService {

  private URL = 'https://bibleapi.co/api';
  private headers: {};
  private Headers: Headers;

  constructor(public http: HttpClient) {
    this.Headers = new Headers();
    this.Headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.Headers.append('Content-Type', 'application/json');
    this.headers = { headers: this.Headers };
  }

  getBooks() {
    return this.http.get(this.URL + '/books');
  }

  getReading(version, book, chapter) {
    return this.http.get(this.URL + `/verses/${version}/${book}/${chapter}`);
  }
}
