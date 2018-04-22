import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeacherSidebarComponent } from './teacher-sidebar/teacher-sidebar.component';
import { StudentSidebarComponent } from './student-sidebar/student-sidebar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    TeacherSidebarComponent,
    StudentSidebarComponent,
    AdminSidebarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    TeacherSidebarComponent,
    StudentSidebarComponent,
    AdminSidebarComponent
  ]
})
export class ComponentsModule { }
