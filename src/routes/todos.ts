import { Router } from "express";
import {
  createTodo,
  getOneTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router = Router();

router.post("/", createTodo);

router.get("/", getAllTodos);

router.get("/:id", getOneTodo);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
