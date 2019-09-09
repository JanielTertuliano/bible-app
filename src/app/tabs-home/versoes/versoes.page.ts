import { Component } from '@angular/core';
import { FirebaseService } from 'src/providers/firebase.service';

@Component({
  selector: 'app-versoes-home',
  templateUrl: 'versoes.page.html',
  styleUrls: ['versoes.page.scss']
})
export class VersoesPage {

  versions: any = [
    'acf',
    'bbe',
    'kjv',
    'nvi',
    'ra'
  ];

  constructor(private firebaseService: FirebaseService) {

  }

}
