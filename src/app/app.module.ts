import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule, AppRoutingComponent } from './app-routing.module';

import { AppComponent } from './app.component';
// import { AuthGuard } from './_guards';
// import { AlertService, AuthenticationService, UserService } from './_services';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { JwtInterceptor, fakeBackendProvider } from './_helpers';
// import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    AppRoutingComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
