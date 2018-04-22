import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminClassmgmtComponent } from './admin-classmgmt/admin-classmgmt.component';
import { AdminExamsComponent } from './admin-exams/admin-exams.component';
import { AdminTimetableComponent } from './admin-timetable/admin-timetable.component';
import { ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
    {
        path: '', component: AdminComponent,
        children: [
            { path: 'classmgmt', component: AdminClassmgmtComponent },
            { path: 'exams', component: AdminExamsComponent },
            { path: 'timetable', component: AdminTimetableComponent },
            {
                path: 'admin-student', loadChildren: './admin-student/admin-student.module#AdminStudentModule'
            },
            {
                path: 'admin-professor', loadChildren: './admin-professor/admin-professor.module#AdminProfessorModule'
            }
        ]
    }
];

@NgModule({
    imports: [ReactiveFormsModule, RouterModule.forChild(routes)],
    exports: [RouterModule, ReactiveFormsModule]
})
export class AdminRoutingModule { }
export const AdminRoutingComponent = [AdminComponent, AdminClassmgmtComponent, AdminExamsComponent, AdminTimetableComponent];