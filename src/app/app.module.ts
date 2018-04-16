import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, AppRoutingComponent } from './app-routing.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
