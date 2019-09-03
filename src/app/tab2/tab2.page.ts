import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title: string;
  arrayChapters = [];
  abbrev: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (Object.entries(params).length === 0 && params.constructor === Object) {
        this.title = 'ELSE';
        this.countChapters(50);
      } else {
        this.title = params.name;
        this.abbrev = params.abbrev;
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

  getReading(chapter) {
    this.router.navigate(['/tabs/tab3'], { queryParams: { abbrev: this.abbrev, chapter, title: this.title } });
  }

}
