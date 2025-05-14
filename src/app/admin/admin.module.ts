import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAlumnesComponent } from './manage-alumnes/manage-alumnes.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ManageAlumnesComponent,
    RouterModule
  ]
})
export class AdminModule { }
