import * as mongoose from "mongoose";
import shortid from "shortid";

import { CreateDog } from "../users/dto/create.dog.dto";
import { PutDogDto } from "../users/dto/put.dog.dto";

const userSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    age: String,
    breed: {
      type: String,
      enum: ["salchicha", "chihuahua", "caniche", "ovejero", "cruza"],
      default: "cruza",
    },
    coat_color: {
      type: String,
      enum: ["negro", "blanco", "overo", "marron", "gris"],
      default: "negro",
    },
    picture_url: String,
    owner_name: String,
  },
  { id: false }
);

class UserModel {
  users: CreateDog[] = [];

  user = mongoose.model("user", userSchema);

  async addNewDog(userFields: CreateDog): Promise<any> {
    const userId = shortid.generate();
    const User = await this.user.create({
      _id: userId,
      ...userFields,
    });
    await User.save();
    return userId;
  }

  async getAllDogs() {
    const Dogs = await this.user.find().exec();
    return Dogs;
  }

  async getDogForId(userId: String) {
    return this.user.findOne({ _id: userId }).exec();
  }

  async putDogData(userId: string, userFields: PutDogDto) {
    const replaceDog = await this.user
      .findOneAndUpdate({ _id: userId }, { $set: userFields }, { new: true })
      .exec();

    return replaceDog;
  }

  public removeDogById(userId: String) {
    this.user.deleteOne({ _id: userId }).exec();
  }
}

export default UserModel;
