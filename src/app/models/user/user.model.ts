import { Schema, model } from "mongoose";
import {
  IUser,
  IUserAddress,
  IUserFullName,
  UserModel,
} from "./user.interface";

import bcrypt from "bcrypt";
import config from "../../../config";

const userFullNameSchema = new Schema<IUserFullName>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const UserAddressSchema = new Schema<IUserAddress>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema<IUser, UserModel>({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: userFullNameSchema,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  hobbies: {
    type: [String],
    required: true,
  },
  address: {
    type: UserAddressSchema,
    required: true,
  },
});

// custom middlewere for hash password
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_rounds));
  next();
});

// custom middlewere for remove password from response
userSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

// custom custom static for check if user exists
userSchema.statics.isUserExists = async (userId: number) => {
  return await User.findOne({ userId });
};

// create model
export const User = model<IUser, UserModel>("User", userSchema);
