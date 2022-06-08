import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Task1Component } from './task1/task1.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { ListComponent } from './list/list.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Task1Component ,AddComponent,ShowComponent,ListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
