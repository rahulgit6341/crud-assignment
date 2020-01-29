import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-create',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class EmpCreateComponent implements OnInit {

  employee: Employee = new Employee();
  dataSubmitted = false;

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.employee = formData.value;
    this.empService.employeeList.push(this.employee);
    this.router.navigate(['/viewEmployee']);
  }

}
