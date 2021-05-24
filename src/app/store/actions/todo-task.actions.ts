import { Action } from '@ngrx/store';
import { TaskItem } from '../models/task-item.model';

export enum ToDoTaskActionTypes {
  ADD_ITEM = '[TODO-LIST] Add Item',
  DELETE_ITEM = '[TODO-LIST] Delete Item',
}

export class AddToDoItemAction implements Action {
  readonly type = ToDoTaskActionTypes.ADD_ITEM;

  constructor(public payload: TaskItem) { }
}

export class DeleteToDoItemAction implements Action {
  readonly type = ToDoTaskActionTypes.DELETE_ITEM;

  constructor(public payload: string) { }
}

export type ToDoTaskAction = AddToDoItemAction | DeleteToDoItemAction;
