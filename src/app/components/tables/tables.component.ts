import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { Employee } from 'src/app/models/employee.model';
import { AppState } from 'src/app/store/models/app-state.model';
import { AddUnSeatedEmployeeAction, DeleteUnSeatedEmployeeAction } from 'src/app/store/actions/unSeated.actions';
import { DeleteSeatedEmployeeAction } from 'src/app/store/actions/seatedEmployee.action';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public employees?: Array<Employee>;
  public unSeatedEmployees: Array<Employee>;
  public seatedEmployees: Array<Employee>;
  public newUnSeatedEmployee: Employee = { id: '', firstName: '', surname: '', seat: null, };

  submitted = false;

  constructor(
    private store: Store<AppState>,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.retrieveEmployees();
    // this.store.select(store => store.unSeated).subscribe((data: Array<Employee>) => {
    //   this.unSeatedEmployees = data.map(obj => ({
    //     ...obj
    //   }));
    // });
    // this.store.select(store => store.seated).subscribe((data: Array<Employee>) => {
    //   this.seatedEmployees = data.map(obj => ({
    //     ...obj
    //   }));
    // });
  }

  public retrieveEmployees(): void {
    this.employeeService.getAll()
      .subscribe(
        data => {
          this.unSeatedEmployees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  public addUnSeatedEmployee() {
    this.newUnSeatedEmployee.id = uuid();

    this.store.dispatch(new AddUnSeatedEmployeeAction(this.newUnSeatedEmployee));

    const data = {
      firstName: this.newUnSeatedEmployee.firstName,
      surname: this.newUnSeatedEmployee.surname,
      seat: this.newUnSeatedEmployee.seat,
    };
    this.employeeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.unSeatedEmployees.push(data);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

    this.newUnSeatedEmployee = { id: '', firstName: '', surname: '', seat: null };
  }

  public deleteUnSeatedEmployee(id: string) {
    this.store.dispatch(new DeleteUnSeatedEmployeeAction(id));
  }

  // public addDoneItem() {
  //   this.newDoneTaskItem.id = uuid();

  //   this.store.dispatch(new AddDoneItemAction(this.newDoneTaskItem));

  //   this.newDoneTaskItem = { id: '', name: '' };
  // }

  public deleteSeatedEmployee(id: string) {
    this.store.dispatch(new DeleteSeatedEmployeeAction(id));
  }

  public drop(event: CdkDragDrop<Array<string>>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}
