import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ResultComponent } from './result/result.component';
import { RegistrationComponent } from './registration/registration.component';
import { studentComponent } from './student.component';
 

const routes: Routes = [ 
  {
    path: '', component: studentComponent,
    children: [
      { path: 'chat', component: ChatComponent },
      { path: 'result', component: ResultComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
export const StudentRoutingComponent = [studentComponent, ChatComponent, ResultComponent, RegistrationComponent];