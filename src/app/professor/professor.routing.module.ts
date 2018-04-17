import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor.component';
import { PchatComponent } from './pchat/pchat.component';
import { PresultComponent } from './presult/presult.component';
import { AlumniComponent } from './alumni/alumni.component';
 
 

const routes: Routes = [ 
  {
    path: '', component: ProfessorComponent,
    children: [
      { path: 'pchat', component: PchatComponent },
      { path: 'presult', component: PresultComponent },
      { path: 'alumni', component: AlumniComponent }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
export const ProfessorRoutingComponent = [ProfessorComponent, PchatComponent, PresultComponent, AlumniComponent];