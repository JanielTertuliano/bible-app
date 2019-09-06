import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibleapiService } from 'src/providers/bibleapi.service';
import { FirebaseService } from 'src/providers/firebase.service';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  arrayVerses = [];
  contant: any;

  constructor(
    private tabs: TabsPage,
    private bibleApi: BibleapiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private firebaseService: FirebaseService) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (Object.entries(params).length === 0 && params.constructor === Object) {
        console.log('---');
      } else {
        console.log(params);
        this.tabs.setTitle(params.title + ' ' +  params.chapter);
        this.getReading(params.abbrev, params.chapter);
        // this._getReading(params.abbrev, params.chapter);
      }
    });
  }

  _getReading(abbrev, chapter) {
    this.bibleApi.getReading('nvi', abbrev, chapter).subscribe(data => {
      this.contant = data;
      console.log( this.contant);
      localStorage.setItem('content', JSON.stringify(this.contant));
      this.countVerses(this.contant.chapter.verses);
    }, err => {
      console.log(err);
    });
  }

  getReading(abbrev, chapter) {
    this.firebaseService.getVersionBookChpter('nvi', abbrev, chapter).subscribe(data => {
      this.contant = data.map(item => {
        return {
          ...item.payload.doc.data()
        };
      });
      localStorage.setItem('content', JSON.stringify(this.contant[0]));
      this.countVerses(this.contant[0].chapter.verses);
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

  selectVerse(verse) {
    this.router.navigate(['/read', verse] );
  }
}
