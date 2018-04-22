import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { AppComponent } from '../app.component'
import { CommonModule } from '@angular/common';

debugger;
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: UserComponent },
            {
                path: 'student', loadChildren: './student/student.module#studentModule'
            },
            {
                path: 'professor', loadChildren: './professor/professor.module#ProfessorModule'
            },
            {
                path: 'admin', loadChildren: './admin/admin.module#AdminModule'
            }
        ]
    },
    { path: '**', component: UserComponent },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UserRoutingModule { }
export const UserRoutingComponent = [UserComponent];