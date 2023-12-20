import { Router } from "express";
import {
  createTodo,
  retrieveSingleTodo,
  retrieveAllTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router = Router();

router.post("/", createTodo);

router.get("/", retrieveAllTodos);

router.get("/:id", retrieveSingleTodo);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
