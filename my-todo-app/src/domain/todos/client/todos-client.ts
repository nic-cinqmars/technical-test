import axios from 'axios';
import { apiRequest } from '../../../application/api/api-request';
import { TodosBasicDto, TodosDto } from '../dto/todos-dto';
import { getApiUrl } from '../../../application/config/config-app';

class TodosClient {
  public static async list() {
    return apiRequest(() => axios.get<TodosBasicDto[]>(`${getApiUrl()}/todos`));
  }

  public static async getById(todosId: string) {
    return apiRequest(() => axios.get<TodosDto>(`${getApiUrl()}/todos/${todosId}`));
  }

  public static async delete(todoId: string) {
    return apiRequest(() => axios.delete(`${getApiUrl()}/todos/${todoId}`));
  }
}

export default TodosClient;
