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

// export user services
export const userServices = {
  createUserIntoDB,
};
