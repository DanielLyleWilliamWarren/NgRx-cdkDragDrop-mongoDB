import { ToDoTaskAction, ToDoTaskActionTypes } from '../actions/todo-task.actions';
import { TaskItem } from '../models/task-item.model';

const initialState: Array<TaskItem> = [
  {
    id: "1775935f-36fd-467e-a667-10f75b717f7d",
    name: 'Empty Dishwasher',
  },
  {
    id: "1775935f-36fd-467e-a667-09f75b717f7d",
    name: 'Shopping',
  },
  {
    id: "1775935f-36fd-467e-a667-08f75b717f7d",
    name: 'Walk Dug',
  },
  {
    id: "1775935f-36fd-467e-a667-07f75b717f7d",
    name: 'Beer run',
  }
];

export function ToDoTaskReducer(state: Array<TaskItem> = initialState, action: ToDoTaskAction) {
  switch (action.type) {
    case ToDoTaskActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ToDoTaskActionTypes.DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
