import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoFactoryService from '../services/todo-factory-service';

export const useTodoDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => await TodoFactoryService.get().deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
