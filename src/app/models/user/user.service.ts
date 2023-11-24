import { IUser, IUserOrder } from "./user.interface";
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
  return await User.findOne({ userId }, { _id: false, orders: false });
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

// add a product to the user's orders service
const addProductIntoUserOrders = async (userId: number, order: IUserOrder) => {
  const userOrders = await User.findOneAndUpdate(
    { userId },
    { $addToSet: { orders: order } },
  );

  if (!userOrders) {
    throw Error("User not found!");
  }

  return userOrders;
};

// retrieve all orders for a specific service
const getSpecificUserOrdersFromDB = async (userId: number) => {
  // check is user already exists
  if (!(await User.isUserExists(userId))) {
    throw Error("User not found!");
  }
  return await User.findOne({ userId }, { orders: true, _id: false });
};

// calculate total price of orders for a specific user service
const getTotalPriceFromUserOrder = async (userId: number) => {
  // check is exists or not
  const user = await User.findOne({ userId });

  if (!user) {
    throw Error("User not found!");
  }

  // calculate total price
  const totalPrice = user.orders?.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0,
  );

  // return totalPrice;
  return Number(totalPrice?.toFixed(2));
};

// export user services
export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSpecificUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
  addProductIntoUserOrders,
  getSpecificUserOrdersFromDB,
  getTotalPriceFromUserOrder,
};
