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
const getUsersFromDB = async () => {
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

// export user services
export const userServices = {
  createUserIntoDB,
  getUsersFromDB,
};
