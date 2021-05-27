import { Employee } from 'src/app/models/employee.model';
export interface AppState {
  readonly unSeated: Array<Employee>
  readonly seated: Array<Employee>;
}
