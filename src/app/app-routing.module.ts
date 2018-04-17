import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'signUp', component: SignupComponent },
  {
    path: 'student', loadChildren: './student/student.module#studentModule'
  },
  {
    path: 'professor', loadChildren: './professor/professor.module#ProfessorModule'
  },
  { path: '**', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponent = [UserComponent, SigninComponent, SignupComponent];