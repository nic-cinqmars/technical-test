import { TodosDto, TodosCreateDto } from '../../dto/todos-dto';

class TodosMockService {
  static mockTodos: TodosDto[] = [
    { id: '1', title: 'Complete Technical Documentation', description: 'Write project documentation', completed: false },
    { id: '2', title: 'Implement Authentication', description: 'Add login and registration system', completed: true },
    { id: '3', title: 'Optimize Performance', description: 'Improve application loading times', completed: false },
    { id: '4', title: 'Perform Unit Tests', description: 'Write tests for main components', completed: false },
    { id: '5', title: 'Update Dependencies', description: 'Review and update npm packages', completed: true },
    { id: '6', title: 'Design Responsive UI', description: 'Ensure application works on all devices', completed: false },
    { id: '7', title: 'Implement REST API', description: 'Create endpoints for CRUD operations', completed: true },
    { id: '8', title: 'Configure CI/CD', description: 'Set up continuous integration pipeline', completed: false },
    { id: '9', title: 'Review Security', description: 'Perform vulnerability analysis', completed: false },
    { id: '10', title: 'Create User Manual', description: 'Document application usage', completed: true },
  ];

  public static async getTodos(): Promise<TodosDto[]> {
    return TodosMockService.mockTodos;
  }

  public static async getTodoById(id: string): Promise<TodosDto | undefined> {
    return TodosMockService.mockTodos.find((todo) => todo.id === id);
  }

  public static async deleteTodo(id: string) {
    TodosMockService.mockTodos = TodosMockService.mockTodos.filter((todo) => todo.id !== id);
  }

  public static async createTodo(newTodo: TodosCreateDto) {
    const id = Number(TodosMockService.mockTodos[TodosMockService.mockTodos.length - 1].id) + 1;
    const todoDto: TodosDto = { id: id.toString(), title: newTodo.title, description: newTodo.description, completed: newTodo.completed };
    TodosMockService.mockTodos.push(todoDto);
  }
}

export default TodosMockService;
