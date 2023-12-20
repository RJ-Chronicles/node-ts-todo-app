// import { Request, Response, NextFunction } from "express"
// export const createTodo = (req:Request, res: Response, next: NextFunction)=>{}

import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const { text } = req.body as { text: string };
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  //if (newTodo) throw new Error("This is not valid at all"); this will fire middleware error function
  res.status(201).json({ message: "Create the new todo. ", todo: newTodo });
};

export const retrieveSingleTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params as { id: string };

  const todo = TODOS.find((item) => item.id === id);
  if (!todo) {
    res.status(404).json({ message: "No record find with given Id" });
    return;
  }
  res.status(200).json({ message: "Record with given Id", todo });
};

export const retrieveAllTodos: RequestHandler = (req, res, next) => {
  let message =
    TODOS.length === 0 ? "There is nothing to return " : "List of records ";
  res.status(200).json({ message, todo: TODOS });
};

export const updateTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params as { id: string };

  const todoIndex = TODOS.findIndex((item) => item.id === id);
  if (todoIndex === -1) {
    res.status(404).json({ message: "No record find with given Id" });
    return;
  }

  const { text } = req.body as { text: string };
  const updatedTodo = new Todo(id, text);
  TODOS[todoIndex] = updatedTodo;
  res.status(201).json({ message: "record updated", todo: updatedTodo });
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params as { id: string };

  const todoIndex = TODOS.findIndex((item) => item.id === id);
  if (todoIndex === -1) {
    res.status(404).json({ message: "No record find with given Id" });
    return;
  }
  const itemRemoved = TODOS[todoIndex];
  TODOS.splice(todoIndex, 1);
  res
    .status(200)
    .json({ message: `Item removed for Id ${id}`, todo: itemRemoved });
};
