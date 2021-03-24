import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatDividerModule} from '@angular/material/divider';

import { MainComponent } from './main/main.component';
import { NavbarComponent} from './/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatDividerModule
    
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
