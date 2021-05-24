import { DoneTaskAction, DoneTaskActionTypes } from '../actions/done-task.action';
import { TaskItem } from '../models/task-item.model';

const initialState: Array<TaskItem> = [
  {
    id: "1775935f-36fd-467e-a667-09f95b917f6d",
    name: 'Walk Dog',
  }
];

export function DoneTaskReducer(state: Array<TaskItem> = initialState, action: DoneTaskAction) {
  switch (action.type) {
    case DoneTaskActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case DoneTaskActionTypes.DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
