import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'assignment', component: AssignmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
