import { Routes } from '@angular/router';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LeaveComponent } from './components/leave/leave.component';

export const routes: Routes = [
  { path: '', redirectTo: 'attendance', pathMatch: 'full' },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'leave', component: LeaveComponent }
];