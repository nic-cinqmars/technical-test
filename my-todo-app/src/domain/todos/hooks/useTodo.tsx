import { useQuery } from '@tanstack/react-query';
import TodoFactoryService from '../services/todo-factory-service';

export const useTodo = (id: string) => {
  return useQuery({ queryKey: ['todos', id], queryFn: () => TodoFactoryService.get().getTodoById(id) });
};
