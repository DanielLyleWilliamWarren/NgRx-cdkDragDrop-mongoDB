import { Employee } from 'src/app/models/employee.model';
import { UnSeatedEmployeeAction, UnSeatedEmployeeActionType } from '../actions/todo-task.actions';

const initialState: Array<Employee> = [
  {
    id: "1775935f-36fd-467e-a667-10f75b717f7d",
    firstName: 'Jon',
    surname: 'Stutely',
    seat: 5,
  },
  {
    id: "1775935f-36fd-467e-a667-09f75b717f7d",
    firstName: 'Rachel',
    surname: 'Heaven',
    seat: 4,
  },
  {
    id: "1775935f-36fd-467e-a667-08f75b717f7d",
    firstName: 'Simon',
    surname: 'Burden',
    seat: 2,
  },
  {
    id: "1775935f-36fd-467e-a667-07f75b717f7d",
    firstName: 'Marcus',
    surname: 'Sen',
    seat: 3,
  }
];

export function unSeatedEmployeeReducer(state: Array<Employee> = initialState, action: UnSeatedEmployeeAction) {
  switch (action.type) {
    case UnSeatedEmployeeActionType.ADD_ITEM:
      return [...state, action.payload];
    case UnSeatedEmployeeActionType.DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
