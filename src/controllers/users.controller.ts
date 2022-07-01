import express from "express";
import UserModel from "../models/user";

class UserController {
  user = new UserModel(); // Object of User model
  private posts = [
    {
      name: "chimuelo",
      age: "1",
      breed: "caniche",
      coat_color: "negro",
    },
  ];
  // Business Logic for GET API
  getAllDogs = async (req: express.Request, res: express.Response) => {
    const AllDogs = await this.user.getAllDogs();
    res.status(200).send(AllDogs);
  };
  // get user for id
  getDogById = async (req: express.Request, res: express.Response) => {
    const userById = await this.user.getDogForId(req.params.id);
    res.status(200).send(userById);
  };

  // Business Logic for POST API
  createDog = async (req: express.Request, res: express.Response) => {
    // Moongo DB Insert Operation
    const userId = await this.user.addNewDog(req.body);
    res.status(200).send({ id: userId });
  };

  // put user for id
  putDogById = async (req: express.Request, res: express.Response) => {
    const putDog = await this.user.putDogData(req.params.id, req.body);
    res.status(200).send("actualized dog data");
  };

  //remove user for id
  removeDog = async (req: express.Request, res: express.Response) => {
    const deleteDog = await this.user.removeDogById(req.params.id);
    res.status(200).send("eliminated dog data");
  };
}

export default UserController;
