import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibleapiService } from 'src/providers/bibleapi.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  title: string;
  arrayVerses = [];
  contant: any;

  constructor(private bibleApi: BibleapiService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (Object.entries(params).length === 0 && params.constructor === Object) {
        console.log('---');
      } else {
        console.log(params);
        this.title = params.title;
        this.getReading(params.abbrev, params.chapter);
      }
    });
  }

  getReading(abbrev, chapter) {
    this.bibleApi.getReading('nvi', abbrev, chapter).subscribe(data => {
      this.contant = data;
      this.countVerses(this.contant.chapter.verses);
    }, err => {
      console.log(err);
    });
  }

  countVerses(verses: number) {
    this.arrayVerses = [];
    for (let i = 1; i <= verses; i++) {
      this.arrayVerses.push(i);
    }
  }

}
