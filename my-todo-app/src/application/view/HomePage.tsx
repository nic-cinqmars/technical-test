import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box } from '@mui/material';
import { useTodosList } from '../../domain/todos/hooks/useTodosList';
import { useTodoDelete } from '../../domain/todos/hooks/useTodoDelete';
import { toast } from 'sonner';

export const HomePage = () => {
  const { data: todos, isLoading } = useTodosList();
  const { mutate: deleteTodo } = useTodoDelete();

  const handleDelete = (id: string) => {
    deleteTodo(id);
    toast.success('Todo deleted successfully');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth='md' sx={{ mt: 4 }}>
      <Box display='flex' justifyContent='flex-end' mb={2}>
        <Button variant='contained' color='primary'>
          Create New Todo
        </Button>
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
