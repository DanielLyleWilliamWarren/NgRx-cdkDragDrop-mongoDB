import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent implements OnInit {

  currentEmployee: Employee = {
    firstName: '',
    surname: '',
    seat: null,
  };
  message = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEmployee(this.route.snapshot.params.id);
  }

  getEmployee(id: string): void {
    this.employeeService.get(id)
      .subscribe(
        data => {
          this.currentEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // updateSeatNumber(seat: number): void {
  //   const data = {
  //     firstName: this.currentEmployee.firstName,
  //     surname: this.currentEmployee.surname,
  //   };

  //   this.employeeService.update(this.currentEmployee.id, data)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.message = response.message;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

 public updateEmployee(): void {
   this.employeeService.update(this.currentEmployee.id, this.currentEmployee)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

 public deleteEmployee(): void {
   this.employeeService.delete(this.currentEmployee.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error);
        });
  }
}
