import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FilterPipe } from './view-employee/search.pipe';
import { EmployeeService } from './shared/employee.service';
import { EmpCreateComponent } from './create-employee/create-employee.component';
import { EmpViewComponent } from './view-employee/view-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpCreateComponent,
    EmpViewComponent,
    EditEmployeeComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  exports: [FilterPipe]
})
export class AppModule { }
