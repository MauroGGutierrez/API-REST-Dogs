import * as express from "express";
import UserController from "../controllers/users.controller";
const userRoutes = express.Router();
const controller = new UserController();

userRoutes.get("/dogs", controller.getAllPosts);
userRoutes.post("/dogs", controller.createAPost);
userRoutes.get("/dogs/:id", controller.getUserById);
userRoutes.put("/dogs/:id", controller.putUserById);
userRoutes.delete("/dogs/:id", controller.removeUser);

export default userRoutes;
