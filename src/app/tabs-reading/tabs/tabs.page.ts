import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  title = 'Livros';

  constructor(private router: Router) { }

  setTitle(title) {
    this.title = title;
  }

}
