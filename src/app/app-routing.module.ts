import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmpCreateComponent } from './create-employee/create-employee.component';
import { EmpViewComponent } from './view-employee/view-employee.component';


const routes: Routes = [
  {path: 'creatEmployee', component: EmpCreateComponent},
  {path: 'viewEmployee', component: EmpViewComponent},
  {path: 'editEmployee/:name/:id', component: EditEmployeeComponent},
  { path: '', redirectTo: 'viewEmployee', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
