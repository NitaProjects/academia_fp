import { Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MyUfsComponent } from './my-ufs/my-ufs.component';

export const STUDENT_ROUTES: Routes = [
  { path: '', component: StudentDashboardComponent },
  { path: 'ufs', component: MyUfsComponent }
];
