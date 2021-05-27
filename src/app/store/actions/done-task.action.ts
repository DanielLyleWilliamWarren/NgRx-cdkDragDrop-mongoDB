import { Action } from '@ngrx/store';
import { Employee } from 'src/app/models/employee.model';

export enum SeatedEmployeeActionType {
  ADD_ITEM = '[SEATED-LIST] Add Item',
  DELETE_ITEM = '[SEATED-LIST] Delete Item',
}

export class AddSeatedEmployeeAction implements Action {
  readonly type = SeatedEmployeeActionType.ADD_ITEM;

  constructor(public payload: Employee) { }
}

export class DeleteSeatedEmployeeAction implements Action {
  readonly type = SeatedEmployeeActionType.DELETE_ITEM;

  constructor(public payload: string) { }
}

export type SeatedEmployeeAction = AddSeatedEmployeeAction | DeleteSeatedEmployeeAction;
