import { IUser } from "./user.interface";
import { User } from "./user.model";

// create user service
const createUserIntoDB = async (user: IUser) => {
  // check is user already exists
  if (await User.isUserExists(user.userId)) {
    throw Error("User Already Exists!");
  }
  return await User.create(user);
};

// get all users service
const getAllUsersFromDB = async () => {
  return await User.find(
    {},
    {
      _id: false,
      username: true,
      fullName: true,
      age: true,
      email: true,
      address: true,
    },
  );
};

// get specific user service
const getSpecificUserFromDB = async (userId: number) => {
  // check is user already exists
  if (!(await User.isUserExists(userId))) {
    throw Error("User not found!");
  }
  return await User.findOne({ userId });
};

// update an existing user servic
const updateUserIntoDB = async (userId: number, updatedUser: IUser) => {
  // check is user already exists
  if (!(await User.isUserExists(userId))) {
    throw Error("User not found!");
  }

  return await User.findOneAndUpdate({ userId }, updatedUser);
};

// delete an existing user service
const deleteUserFromDB = async (userId: number) => {
  // check is user already exists
  if (!(await User.isUserExists(userId))) {
    throw Error("User not found!");
  }

  return await User.findOneAndDelete({ userId });
};

// export user services
export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSpecificUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
};
