import * as express from "express";
import UserController from "../controllers/users.controller";
const userRoutes = express.Router();
const controller = new UserController();

userRoutes.get("/dogs", controller.getAllDogs);
userRoutes.post("/dogs", controller.createDog);
userRoutes.get("/dogs/:id", controller.getDogById);
userRoutes.put("/dogs/:id", controller.putDogById);
userRoutes.delete("/dogs/:id", controller.removeDog);

export default userRoutes;
