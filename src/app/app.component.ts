import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { v4 as uuid } from 'uuid';
import { AddDoneItemAction, DeleteDoneItemAction } from './store/actions/done-task.action';
import { AddToDoItemAction, DeleteToDoItemAction } from './store/actions/todo-task.actions';
import { AppState } from './store/models/app-state.model';
import { TaskItem } from './store/models/task-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public toDoItems: Array<TaskItem>;
  public doneItems: Array<TaskItem>;
  public newToDoTaskItem: TaskItem = { id: '', name: '' };
  public newDoneTaskItem: TaskItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(store => store.toDo).subscribe((data: Array<TaskItem>) => {
      this.toDoItems = data.map(obj => ({
        ...obj
      }));
    });
    this.store.select(store => store.done).subscribe((data: Array<TaskItem>) => {
      this.doneItems = data.map(obj => ({
        ...obj
      }));
    });
  }

  public addToDoItem() {
    this.newToDoTaskItem.id = uuid();

    this.store.dispatch(new AddToDoItemAction(this.newToDoTaskItem));

    this.newToDoTaskItem = { id: '', name: '' };
  }

  public deleteToDoItem(id: string) {
    console.debug('call');
    this.store.dispatch(new DeleteToDoItemAction(id));
  }

  public addDoneItem() {
    this.newDoneTaskItem.id = uuid();

    this.store.dispatch(new AddDoneItemAction(this.newDoneTaskItem));

    this.newDoneTaskItem = { id: '', name: '' };
  }

  public deleteDoneItem(id: string) {
    this.store.dispatch(new DeleteDoneItemAction(id));
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
