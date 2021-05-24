import { TaskItem } from './task-item.model';

export interface AppState {
  readonly toDo: Array<TaskItem>
  readonly done: Array<TaskItem>;
}
