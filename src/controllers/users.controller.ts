import * as express from "express";
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
  getAllPosts = (req: express.Request, res: express.Response) => {
    res.status(200).send(this.posts);
  };
  // get user for id

  async getUserById(req: express.Request, res: express.Response) {
    const userById = await this.user.getUserForId(req.body.id);
    res.status(200).send(userById);
  }

  // Business Logic for POST API
  createAPost = (req: express.Request, res: express.Response) => {
    // Moongo DB Insert Operation
    this.user.saveUser(this.posts, (err: any, user: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    });
  };
  //remove user for id
  async removeUser(req: express.Request, res: express.Response) {
    console.log(await this.user.removeUserById(req.body.id));
    res.status(204).send("eliminated dog data");
  }

  // put user for id
  async putUserById(req: express.Request, res: express.Response) {
    console.log(await this.user.putUser(req.body.id, req.body));
    res.status(204).send("actualized dog data");
  }
}

export default UserController;
