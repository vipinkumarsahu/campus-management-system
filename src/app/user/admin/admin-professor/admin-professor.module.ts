import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfessorRoutingComponent, AdminProfessorRoutingModule } from './admin.professor.routing.module'

@NgModule({
  imports: [
    CommonModule,
    AdminProfessorRoutingModule
  ],
  declarations: [AdminProfessorRoutingComponent]
})
export class AdminProfessorModule { }
