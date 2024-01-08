import express from "express";
import {
  getAllUsers,
  getUser,
  newUser,
  deleteUser,
} from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

app.post("/new", newUser);

app.get("/all", adminOnly, getAllUsers);

app.route("/:id").get(getUser).delete(adminOnly, deleteUser);

export default app;
