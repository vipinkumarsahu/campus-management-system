import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingComponent, StudentRoutingModule } from './student.routing.module';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [StudentRoutingComponent]
})
export class studentModule { }
