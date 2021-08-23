import { Employee } from 'src/app/models/employee.model';
import { SeatedEmployeeAction, SeatedEmployeeActionType } from '../actions/seatedEmployee.action';

const initialState: Array<Employee> = [
  {
    id: "1775935f-36fd-467e-a667-09f95b917f6d",
    firstName: 'Daniel',
    surname: 'Warren',
    seat: 1,
  }
];

export function seatedEmployeeReducer(state: Array<Employee> = initialState, action: SeatedEmployeeAction) {
  switch (action.type) {
    case SeatedEmployeeActionType.ADD_ITEM:
      return [...state, action.payload];
    case SeatedEmployeeActionType.DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
