import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { Employee } from 'src/app/models/employee.model';
import { AppState } from 'src/app/store/models/app-state.model';
import { AddUnSeatedEmployeeAction, DeleteUnSeatedEmployeeAction } from 'src/app/store/actions/todo-task.actions';
import { DeleteSeatedEmployeeAction } from 'src/app/store/actions/done-task.action';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public unSeatedEmployees: Array<Employee>;
  public seatedEmployees: Array<Employee>;
  public newUnSeatedEmployee: Employee = { id: '', firstName: '', surname: '', seat: null, };
  // public newDoneTaskItem: Employee = { id: '', name: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // console.debug(this.store.select(store => store.unSeated))
    this.store.select(store => store.unSeated).subscribe((data: Array<Employee>) => {
      // console.debug('data:', data)
      this.unSeatedEmployees = data.map(obj => ({
        ...obj
      }));
    });
    this.store.select(store => store.seated).subscribe((data: Array<Employee>) => {
      // console.debug('data:', data)
      this.seatedEmployees = data.map(obj => ({
        ...obj
      }));
    });
  }

  public addUnSeatedEmployee() {
    this.newUnSeatedEmployee.id = uuid();

    this.store.dispatch(new AddUnSeatedEmployeeAction(this.newUnSeatedEmployee));

    this.newUnSeatedEmployee = { id: '', firstName: '', surname: '' };
  }

  public deleteUnSeatedEmployee(id: string) {
    console.debug('call');
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
    console.debug('call', event);
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
