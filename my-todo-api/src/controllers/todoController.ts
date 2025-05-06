import { Request, Response } from 'express';
import { Todos } from "../models/todos";

const todos: Todos[] = [];
let nextId = 0;

export const getTodos = (req: Request, res: Response) => {
    res.json(todos);
};

export const createTodo = (req: Request, res: Response) => {
    const newTodo: Todos = { id: nextId.toString(), title: req.body.title, completed: req.body.completed, description: req.body.description };
    nextId++;
    todos.push(newTodo);
    res.status(201).send();
};

export const deleteTodo = (req: Request, res: Response) => {
    const todoId = req.params.id;
    const todoIndex = todos.findIndex((i) => i.id === todoId);
    if (todoIndex === -1) {
        res.status(404).send();
        return;
    }

    todos.splice(todoIndex, 1);

    res.status(201).send();
}