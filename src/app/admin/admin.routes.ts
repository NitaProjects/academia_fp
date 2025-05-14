import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageAlumnesComponent } from './manage-alumnes/manage-alumnes.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'alumnes', component: ManageAlumnesComponent }
];
