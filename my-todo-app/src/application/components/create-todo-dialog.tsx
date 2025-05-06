import React, { FC } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import {TodosCreateDto} from "../../domain/todos/dto/todos-dto.ts";

interface CreateTodoDialogProps {
    onSubmit: (newTodo: TodosCreateDto) => void;
}

const CreateTodoDialog: FC<CreateTodoDialogProps> = ({ onSubmit }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create new Todo
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries(formData.entries());
                            const newTodo: TodosCreateDto = { title: formJson.title as string, description: formJson.description as string, completed: false };
                            onSubmit(newTodo);
                            handleClose();
                        },
                    },
                }}
            >
                <DialogTitle>Create a new Todo</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="todo-title"
                        name="title"
                        label="Title"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="todo-description"
                        name="description"
                        label="Description"
                        fullWidth
                        variant="standard"
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Create</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default CreateTodoDialog;