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

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}

@Component({
  templateUrl: './popover.html',
  styleUrls: ['./read.page.scss'],
})

export class PopoverComponent {

  background: string;
  contentEle: any;
  textEle: any;

  colors = {
    white: {
      bg: 'rgb(255, 255, 255)',
      fg: 'rgb(0, 0, 0)'
    },
    tan: {
      bg: 'rgb(249, 241, 228)',
      fg: 'rgb(0, 0, 0)'
    },
    grey: {
      bg: 'rgb(76, 75, 80)',
      fg: 'rgb(255, 255, 255)'
    },
    black: {
      bg: 'rgb(0, 0, 0)',
      fg: 'rgb(255, 255, 255)'
    },
  };

  ngOnInit() {
    this.contentEle = document.getElementsByClassName('text-to-change');
    this.textEle = document.getElementsByClassName('content');
    this.background = this.getColorName(this.contentEle[0].style.backgroundColor);
  }

  getColorName(background) {
    let colorName = 'white';

    if (!background) { return 'white'; }

    for (const key in this.colors) {
      if (this.colors[key].bg === background) {
        colorName = key;
      }
    }

    return colorName;
  }

  changeBackground(color) {
    this.background = color;
    this.contentEle[0].style.backgroundColor = this.colors[color].bg;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.textEle.length; i++) {
      this.textEle[i].style.color = this.colors[color].fg;
    }
  }

  changeFontSize(direction) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.textEle.length; i++) {
      this.textEle[i].style.fontSize = direction;
    }
  }

  changeFontFamily(fontFamily) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.textEle.length; i++) {
      this.textEle[i].style.fontFamily = fontFamily.replace(/'/g, '');
    }
  }
}
