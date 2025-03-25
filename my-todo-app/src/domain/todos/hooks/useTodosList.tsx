import { useQuery } from '@tanstack/react-query';
import TodoFactoryService from '../services/todo-factory-service';

export const useTodosList = () => {
  return useQuery({ queryKey: ['todos'], queryFn: TodoFactoryService.get().getTodos });
};
