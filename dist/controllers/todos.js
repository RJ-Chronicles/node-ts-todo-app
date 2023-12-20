"use strict";
// import { Request, Response, NextFunction } from "express"
// export const createTodo = (req:Request, res: Response, next: NextFunction)=>{}
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.retrieveAllTodos = exports.retrieveSingleTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const { text } = req.body;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    //if (newTodo) throw new Error("This is not valid at all"); this will fire middleware error function
    res.status(201).json({ message: "Create the new todo. ", todo: newTodo });
};
exports.createTodo = createTodo;
const retrieveSingleTodo = (req, res, next) => {
    const { id } = req.params;
    const todo = TODOS.find((item) => item.id === id);
    if (!todo) {
        res.status(404).json({ message: "No record find with given Id" });
        return;
    }
    res.status(200).json({ message: "Record with given Id", todo });
};
exports.retrieveSingleTodo = retrieveSingleTodo;
const retrieveAllTodos = (req, res, next) => {
    let message = TODOS.length === 0 ? "There is nothing to return " : "List of records ";
    res.status(200).json({ message, todo: TODOS });
};
exports.retrieveAllTodos = retrieveAllTodos;
const updateTodo = (req, res, next) => {
    const { id } = req.params;
    const todoIndex = TODOS.findIndex((item) => item.id === id);
    if (todoIndex === -1) {
        res.status(404).json({ message: "No record find with given Id" });
        return;
    }
    const { text } = req.body;
    const updatedTodo = new todo_1.Todo(id, text);
    TODOS[todoIndex] = updatedTodo;
    res.status(201).json({ message: "record updated", todo: updatedTodo });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const { id } = req.params;
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
exports.deleteTodo = deleteTodo;
