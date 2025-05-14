import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { MyUfsComponent } from './my-ufs/my-ufs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MyUfsComponent, 
    RouterModule
  ]
})
export class StudentModule { }
