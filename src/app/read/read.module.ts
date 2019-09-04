import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReadPage, PopoverComponent } from './read.page';

const routes: Routes = [
  {
    path: '',
    component: ReadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReadPage, PopoverComponent],
  entryComponents: [ReadPage, PopoverComponent]
})
export class ReadPageModule {}
