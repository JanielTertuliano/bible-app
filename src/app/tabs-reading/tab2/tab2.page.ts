import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  arrayChapters = [];
  abbrev: string;
  title: string;

  constructor(
    private tabs: TabsPage,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (Object.entries(params).length === 0 && params.constructor === Object) {
        this.countChapters(50);
      } else {
        this.abbrev = params.abbrev;
        this.title = params.name;
        this.tabs.setTitle(this.title);
        this.countChapters(params.chapters);
      }
    });
  }

  countChapters(chapters: number) {
    this.arrayChapters = [];
    for (let i = 1; i <= chapters; i++) {
      this.arrayChapters.push(i);
    }
  }

  selectChapter(chapter) {
    this.router.navigate(['/tabs-home/tabs-reading/tab3'], { queryParams: { abbrev: this.abbrev, chapter, title: this.title } });
  }

}
