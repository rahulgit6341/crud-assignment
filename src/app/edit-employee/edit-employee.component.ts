import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee;
  empName: string;
  empInd: number;

  @ViewChild('formData' ,{static: true}) userDetailForm : NgForm;

  constructor(private empService: EmployeeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.empName = this.route.snapshot.params['name'];
    this.route.params.subscribe((params) => {
      // tslint:disable-next-line: no-string-literal
      this.empName = this.route.snapshot.params['name'];
    });
    const modifiedName = this.empName.split('_').join(' ');
    console.log(this.userDetailForm)
    this.employee = this.empService.employeeList.find(eachUser => (eachUser.name === modifiedName));
  }

  // onSubmit(formData) {
  //   this.employee = formData.value;
  //   // tslint:disable-next-line: no-string-literal
  //   this.empInd = this.route.snapshot.params['id'];
  //   this.empService.employeeList[this.empInd] = this.employee;
  //   // this.empService.createEmployee(this.employee).subscribe(data => console.log(data),
  //   // error => console.log(error));
  //   this.router.navigate(['/viewEmployee']);
  // }

  onSubmit() {
    
    this.employee = this.userDetailForm.value;
    // tslint:disable-next-line: no-string-literal
    this.empInd = this.route.snapshot.params['id'];
    this.empService.employeeList[this.empInd] = this.employee;
    // this.empService.createEmployee(this.employee).subscribe(data => console.log(data),
    // error => console.log(error));
    this.router.navigate(['/viewEmployee']);
  }

  cancel(){
    this.router.navigate(['/viewEmployee'])
  }
}
