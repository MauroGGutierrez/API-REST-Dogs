import * as mongoose from "mongoose";
import { PutDogDto } from "../users/put.dog.dto";

const userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  age: String,
  breed: ["salchicha", "chihuahua", "caniche"],
  coat_color: ["negro", "blanco", "overo", "marron"],
  picture_url: String,
  owner_name: String,
});

class UserModel {
  user = mongoose.model("user", userSchema);

  public saveUser(posts: any, callback: any) {
    this.user.create(posts, callback);
  }

  public fetchUser(id: string, callback: any) {
    this.user.findById(id, callback).exec();
  }

  public getUserForId(userId: String) {
    return this.user.findOne({ _id: userId }).exec();
  }

  async putUser(userId: string, userFields: PutDogDto) {
    const replaceDog = await this.user
      .findOneAndUpdate({ _id: userId }, { $set: userFields }, { new: true })
      .exec();

    return replaceDog;
  }

  public removeUserById(userId: String) {
    this.user.deleteOne({ _id: userId }).exec();
  }
}

export default UserModel;
