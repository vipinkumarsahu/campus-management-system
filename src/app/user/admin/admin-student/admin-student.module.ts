import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AdminStudentComponent } from './admin-student.component';
import { AdminManageStudentsComponent } from './components/admin-manage-students/admin-manage-students.component';
import { AdminManageScholarshipComponent } from './components/admin-manage-scholarship/admin-manage-scholarship.component';
import { AdminStudentRoutingComponent, AdminStudentRoutingModule } from './admin-student.routing.module'

@NgModule({
  imports: [
    CommonModule,
    AdminStudentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminStudentRoutingComponent]
})
export class AdminStudentModule { }
