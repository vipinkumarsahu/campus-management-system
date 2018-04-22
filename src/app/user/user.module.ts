import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingComponent, UserRoutingModule } from './user.routing.module';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [ UserRoutingComponent]
})
export class UserModule { }
