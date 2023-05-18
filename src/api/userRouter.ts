import express from "express";
import { Router } from "express";
import userController from "./userController";

const userRouter: Router = express.Router();

userRouter.get("/", userController.helloUser);

userRouter.get("/users", userController.getAllUsers);

userRouter.get("/users/:id", userController.getUser);

userRouter.put("/users/:id/email", userController.modifyEmail);

userRouter.put("/users/:id/password", userController.modifyPassword);

userRouter.delete("/users/:id", userController.deleteUser);

export default userRouter;
