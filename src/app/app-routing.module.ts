import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
// import { studentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { studentComponent } from './student/student.component';
import { ChatComponent } from './student/chat/chat.component';
 
import { RegistrationComponent } from './student/registration/registration.component';
import { PchatComponent } from './professor/pchat/pchat.component';
import { AlumniComponent } from './professor/alumni/alumni.component';
import { PresultComponent } from './professor/presult/presult.component';
import { ResultComponent } from './student/result/result.component';
 

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'signUp', component: SignupComponent },
  {
    path: 'student', component: studentComponent,
    children: [
      { path: 'chat', component: ChatComponent },
      { path: 'result', component: ResultComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  },
  {
    path: 'professor', component: ProfessorComponent,
    children: [
      { path: 'pchat', component: PchatComponent },
      { path: 'result', component: PresultComponent },
      { path: 'alumni', component: AlumniComponent }
    ]
  },
  { path: '**', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponent = [PchatComponent, PresultComponent, AlumniComponent, UserComponent, studentComponent, ProfessorComponent, SigninComponent, SignupComponent, ChatComponent, ResultComponent, RegistrationComponent];