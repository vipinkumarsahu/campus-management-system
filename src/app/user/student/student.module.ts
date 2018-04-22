import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../shell/components/components.module'
import { StudentRoutingComponent, StudentRoutingModule } from './student.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    StudentRoutingModule
  ],
  declarations: [StudentRoutingComponent]
})
export class studentModule { }
