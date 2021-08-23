import { Action } from '@ngrx/store';
import { Employee } from 'src/app/models/employee.model';

export enum UnSeatedEmployeeActionType {
  ADD_ITEM = '[UNSEATED-LIST] Add Item',
  DELETE_ITEM = '[UNSEATED-LIST] Delete Item',
}

export class AddUnSeatedEmployeeAction implements Action {
  readonly type = UnSeatedEmployeeActionType.ADD_ITEM;

  constructor(public payload: Employee) {
  }
}

export class DeleteUnSeatedEmployeeAction implements Action {
  readonly type = UnSeatedEmployeeActionType.DELETE_ITEM;

  constructor(public payload: string) { }
}

export type UnSeatedEmployeeAction = AddUnSeatedEmployeeAction | DeleteUnSeatedEmployeeAction;
