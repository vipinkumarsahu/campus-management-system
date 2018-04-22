import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProfessorComponent } from './admin-professor.component';
import { AdminManageProfessorsComponent } from './admin-manage-professors/admin-manage-professors.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: AdminProfessorComponent },
            { path: 'admin-manage-professor', component: AdminManageProfessorsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminProfessorRoutingModule { }
export const AdminProfessorRoutingComponent = [AdminProfessorComponent, AdminManageProfessorsComponent];