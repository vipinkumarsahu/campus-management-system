import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ResultComponent } from './result/result.component';
import { RegistrationComponent } from './registration/registration.component';
import { studentComponent } from './student.component';
import { SprofileComponent } from './sprofile/sprofile.component';


const routes: Routes = [
  {
    path: '', component: studentComponent,
    children: [
      { path: 'chat', component: ChatComponent },
      { path: 'result', component: ResultComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'sprofile', component: SprofileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
export const StudentRoutingComponent = [SprofileComponent, studentComponent, ChatComponent, ResultComponent, RegistrationComponent];