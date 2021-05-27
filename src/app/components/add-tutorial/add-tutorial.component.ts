import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.scss']
})
export class AddTutorialComponent implements OnInit {

  public employee: Employee = {
    firstName: '',
    surname: '',
    seat: null,
  };
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  public saveEmployee(): void {
    const data = {
      firstName: this.employee.firstName,
      surname: this.employee.surname,
      seat: this.employee.seat,
    };

    this.employeeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  public newEmployee(): void {
    this.submitted = false;
    this.employee = {
      firstName: '',
      surname: '',
      seat: null,
    };
  }

}
