import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfessorRoutingComponent, ProfessorRoutingModule} from './professor.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfessorRoutingModule
  ],
  declarations: [ProfessorRoutingComponent]
})
export class ProfessorModule { }
