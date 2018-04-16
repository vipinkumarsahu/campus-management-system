import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studentComponent } from './student.component';
import { ChatComponent } from './chat/chat.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResultComponent } from './result/result.component';
import {StudentRoutingComponent, StudentRoutingModule} from './student.routing.module';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [studentComponent, StudentRoutingComponent]
})
export class studentModule { }
