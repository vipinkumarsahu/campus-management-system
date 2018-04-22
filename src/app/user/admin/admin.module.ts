import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingComponent, AdminRoutingModule } from './admin.routing.module';
import { ComponentsModule } from '../../shell/components/components.module'


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    AdminRoutingModule
  ],
  declarations: [AdminRoutingComponent]
})
export class AdminModule { }
