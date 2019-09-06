import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  title = 'Livros';

  constructor() { }

  setTitle(title) {
    this.title = title;
  }

}
