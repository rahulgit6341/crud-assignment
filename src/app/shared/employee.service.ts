import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from '../model/employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList = [
    {
        name: 'Rahul',
        designation: 'Associate Consultant',
        salary: 70000
    },
    {
        name: 'Sushmita',
        designation: 'Associate Consultant',
        salary: 50000
    },
    {
        name: 'Rajnandini',
        designation: 'Tester',
        salary: 35000
    },
    {
        name: 'Viral',
        designation: 'Lead Tester',
        salary: 75000
    },
    {
        name: 'Archanana',
        designation: 'HR',
        salary: 60000
    }
]

  constructor(private http: HttpClient ) { }

  emitEdittedUser = new EventEmitter<Employee>();
  emitUserlist = new EventEmitter<any>();

  getEmployees(): Observable<any> {
    return this.http.get('/assets/employee.json');
  }

  getEmployeesEdit(empName): Observable<any> {
    return this.http.get('/assets/employee.json');
  }

  deleteEmployee(empId) {
    const employeeData = this.http.delete('/assets/employee.json');
    return employeeData;
  }

  createEmployee(empData: Employee) {
    return this.http.post('/assets/employee.json/', empData);
  }
}
