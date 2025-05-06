import axios from 'axios';
import { apiRequest } from '../../../application/api/api-request';
import { TodosBasicDto, TodosDto, TodosCreateDto } from '../dto/todos-dto';
import { getApiUrl } from '../../../application/config/config-app';

class TodosClient {
  public static async list() {
    return apiRequest(() => axios.get<TodosBasicDto[]>(`${getApiUrl()}/api/todos`));
  }

  public static async getById(todosId: string) {
    return apiRequest(() => axios.get<TodosDto>(`${getApiUrl()}/api/todos/${todosId}`));
  }

  public static async delete(todoId: string) {
    return apiRequest(() => axios.delete(`${getApiUrl()}/api/todos/${todoId}`));
  }

  public static async create(newTodo: TodosCreateDto) {
    return apiRequest(() => axios.post(`${getApiUrl()}/api/todos`, newTodo));
  }
}

export default TodosClient;
