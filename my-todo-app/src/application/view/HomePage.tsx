import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box } from '@mui/material';
import CreateTodoDialog from '../components/create-todo-dialog'
import { useTodosList } from '../../domain/todos/hooks/useTodosList';
import { useTodoDelete } from '../../domain/todos/hooks/useTodoDelete';
import { useTodoCreate } from "../../domain/todos/hooks/useTodoCreate.tsx";
import { toast } from 'sonner';
import { TodosCreateDto } from "../../domain/todos/dto/todos-dto.ts";

export const HomePage = () => {
  const { data: todos, isLoading } = useTodosList();
  const { mutate: deleteTodo } = useTodoDelete();
  const { mutate: createTodo } = useTodoCreate();

  const handleDelete = (id: string) => {
    deleteTodo(id);
    toast.success('Todo deleted successfully');
  };

  const handleSubmit = (newTodo: TodosCreateDto) => {
    createTodo(newTodo);
    toast.success('Todo created successfully');
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth='md' sx={{ mt: 4 }}>
      <Box display='flex' justifyContent='flex-end' mb={2}>
          <CreateTodoDialog onSubmit={handleSubmit}/>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos?.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell>{todo.title}</TableCell>
                <TableCell>
                  <Button variant='outlined' color='error' size='small' onClick={() => handleDelete(todo.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
