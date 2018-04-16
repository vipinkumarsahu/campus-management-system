import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ResultComponent } from './result/result.component';
import { RegistrationComponent } from './registration/registration.component';
 

const routes: Routes = [ 
  { path: 'chat', component: ChatComponent },
  { path: 'result', component: ResultComponent },
  { path: 'registration', component: RegistrationComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
export const StudentRoutingComponent = [ChatComponent, ResultComponent, RegistrationComponent];