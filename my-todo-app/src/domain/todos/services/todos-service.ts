import TodosClient from '../client/todos-client';
import { TodosCreateDto } from "../dto/todos-dto.ts";

class TodosService {
  public static async getTodos() {
    const response = await TodosClient.list();
    return response;
  }

  public static async getTodoById(id: string) {
    const response = await TodosClient.getById(id);
    return response;
  }

  public static async deleteTodo(id: string) {
    const response = await TodosClient.delete(id);
    return response;
  }

  public static async createTodo(newTodo: TodosCreateDto) {
    const response = await TodosClient.create(newTodo);
    return response;
  }
}

export default TodosService;
