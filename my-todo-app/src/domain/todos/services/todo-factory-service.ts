import { getMockApiData } from '../../../application/config/config-app';
import TodosMockService from './mock/todos-mock-service';
import TodosService from './todos-service';

class TodoFactoryService {
  public static get() {
    console.log(getMockApiData());
    return getMockApiData() ? TodosMockService : TodosService;
  }
}

export default TodoFactoryService;
