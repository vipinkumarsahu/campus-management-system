import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor.component';
import { PchatComponent } from './pchat/pchat.component';
import { PresultComponent } from './presult/presult.component';
import { AlumniComponent } from './alumni/alumni.component';
import { PassignmentComponent } from './passignment/passignment.component';
import { PprofileComponent } from './pprofile/pprofile.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ProfessorComponent},
      { path: 'pchat', component: PchatComponent },
      { path: 'presult', component: PresultComponent },
      { path: 'alumni', component: AlumniComponent },
      { path: 'passignment', component: PassignmentComponent },
      { path: 'pprofile', component: PprofileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, FormsModule]
})
export class ProfessorRoutingModule { }
export const ProfessorRoutingComponent = [PprofileComponent, ProfessorComponent, PchatComponent, PresultComponent, AlumniComponent, PassignmentComponent];