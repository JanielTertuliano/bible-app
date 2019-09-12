import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibleapiService } from 'src/providers/bibleapi.service';
import { FirebaseService } from 'src/providers/firebase.service';
import { TabsPage } from '../tabs/tabs.page';
import { ModalController } from '@ionic/angular';
import { ReadPage } from './../../read/read.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  arrayVerses = [];
  content: any = {};

  constructor(
    private tabs: TabsPage,
    private bibleApi: BibleapiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private firebaseService: FirebaseService,
    public modalController: ModalController) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (Object.entries(params).length === 0 && params.constructor === Object) {
        this.content = JSON.parse(localStorage.getItem('content'));
        this.tabs.setTitle(this.content.book.name + ' ' + this.content.chapter.number);
        // this.countVerses(this.content.chapter.verses);
        this.getReading(this.content.book.abbrev, this.content.chapter.number);
      } else {
        this.tabs.setTitle(params.title + ' ' + params.chapter);
        this.getReading(params.abbrev, params.chapter);
      }
    });
  }

  getReading(abbrev, chapter) {
    this.firebaseService.getVersionBookChpter('nvi', abbrev, chapter).subscribe(data => {
      this.content = data;
      localStorage.setItem('content', JSON.stringify(this.content));
      this.countVerses(this.content.chapter.verses);
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

  async selectVerse(verse) {

    const modal = await this.modalController.create({
      component: ReadPage
    });
    return await modal.present();
    this.router.navigate(['/read', verse]);
  }

}
