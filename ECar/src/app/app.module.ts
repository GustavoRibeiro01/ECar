import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MzButtonModule, MzInputModule } from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { MzCheckboxModule } from 'ngx-materialize';
import { MzNavbarModule } from 'ngx-materialize'

import { DashcarrosComponent } from './dashcarros/dashcarros.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashcarrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzCheckboxModule,
    MzNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
