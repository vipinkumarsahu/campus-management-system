import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingComponent, AdminRoutingModule } from './admin.routing.module';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminRoutingComponent]
})
export class AdminModule { }
