import { Action } from '@ngrx/store';
import { TaskItem } from '../models/task-item.model';

export enum DoneTaskActionTypes {
  ADD_ITEM = '[DONE-LIST] Add Item',
  DELETE_ITEM = '[DONE-LIST] Delete Item',
}

export class AddDoneItemAction implements Action {
  readonly type = DoneTaskActionTypes.ADD_ITEM;

  constructor(public payload: TaskItem) { }
}

export class DeleteDoneItemAction implements Action {
  readonly type = DoneTaskActionTypes.DELETE_ITEM;

  constructor(public payload: string) { }
}

export type DoneTaskAction = AddDoneItemAction | DeleteDoneItemAction;
