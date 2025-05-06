import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoFactoryService from '../services/todo-factory-service';
import { TodosCreateDto } from "../dto/todos-dto.ts";

export const useTodoCreate = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newTodo: TodosCreateDto) => await TodoFactoryService.get().createTodo(newTodo),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });
};