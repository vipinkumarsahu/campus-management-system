import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorComponent } from './professor.component';
 
import { AlumniComponent } from './alumni/alumni.component';
import { PchatComponent } from './pchat/pchat.component';
import { PresultComponent } from './presult/presult.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfessorComponent, PresultComponent, AlumniComponent, PchatComponent, PresultComponent]
})
export class ProfessorModule { }
