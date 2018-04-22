import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminStudentComponent } from './admin-student.component';
import { AdminManageScholarshipComponent } from './components/admin-manage-scholarship/admin-manage-scholarship.component';
import { AdminManageStudentsComponent } from './components/admin-manage-students/admin-manage-students.component';
import { AdminManageSubjectComponent } from './components/admin-manage-subject/admin-manage-subject.component';

debugger
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: AdminStudentComponent },
            { path: 'admin-manage-scholarship', component: AdminManageScholarshipComponent },
            { path: 'admin-manage-student', component: AdminManageStudentsComponent },
            { path: 'admin-manage-subject', component: AdminManageSubjectComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminStudentRoutingModule { }
export const AdminStudentRoutingComponent = [AdminStudentComponent, AdminManageScholarshipComponent, AdminManageStudentsComponent, AdminManageSubjectComponent];