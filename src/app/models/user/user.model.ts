import { Schema, model } from "mongoose";
import {
  IUser,
  IUserAddress,
  IUserFullName,
  IUserOrder,
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

const userOrderSchema = new Schema<IUserOrder>({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const userSchema = new Schema<IUser, UserModel>(
  {
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
    orders: [userOrderSchema],
  },
  { versionKey: false },
);

// custom middlewere for hash password
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_rounds));
  next();
});

// delete hashed password after stored for client response
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;

  // remove 'orders' property if it's an empty array
  if (user.orders && user.orders.length === 0) {
    delete user.orders;
  }
  return user;
};

// custom custom static for check if user exists
userSchema.statics.isUserExists = async (userId: number) => {
  return await User.findOne({ userId });
};

// create model
export const User = model<IUser, UserModel>("User", userSchema);
