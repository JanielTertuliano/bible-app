import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  content: any;
  title: string;
  chapter: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private popoverCtrl: PopoverController) {
    this.content = JSON.parse(localStorage.getItem('content'));
    this.title = this.content.book.name;
    this.chapter = this.content.chapter.number;

    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('verse'));
    });

  }

  ngOnInit() {
  }
}
