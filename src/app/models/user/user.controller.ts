import { Request, Response } from "express";
import UserValidationSchema, { UserOrderSchema } from "./user.validation";
import { userServices } from "./user.service";

// create user controller
const createUser = async (req: Request, res: Response) => {
  try {
    // get user data from req.body
    const { user } = req.body;

    // validate user
    const validateUser = UserValidationSchema.parse(user);

    // result
    const result = await userServices.createUserIntoDB(validateUser);

    // send valid response
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error: any) {
    // send error response
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        message: error.message,
      },
    });
  }
};

// get all users controller
const getAllUsers = async (req: Request, res: Response) => {
  try {
    // result
    const result = await userServices.getAllUsersFromDB();

    // send valid response
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    // send error response
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        message: error.message,
      },
    });
  }
};

// get specific user controller
const getSpecificUser = async (req: Request, res: Response) => {
  try {
    // get userId from req.params
    const { userId } = req.params;

    // result
    const result = await userServices.getSpecificUserFromDB(Number(userId));

    // send valid response
    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    // send error response
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        message: error.message,
      },
    });
  }
};

// update an existing user controller
const updateUser = async (req: Request, res: Response) => {
  try {
    // get userId from req.params
    const { userId } = req.params;

    // get updated user from req.body
    const { user } = req.body;

    // result
    const result = await userServices.updateUserIntoDB(Number(userId), user);

    // send valid response
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (error: any) {
    // send error response
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        message: error.message,
      },
    });
  }
};

// delete an existing user controller
const deleteUser = async (req: Request, res: Response) => {
  try {
    // get userId from req.params
    const { userId } = req.params;

    // result
    await userServices.deleteUserFromDB(Number(userId));

    // send valid response
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    // send error response
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        message: error.message,
      },
    });
  }
};

// add a product to the user's orders controller
const addProduct = async (req: Request, res: Response) => {
  try {
    // get userId from req.params
    const { userId } = req.params;

    // get order data from req.body;
    const order = req.body;

    // validate order
    const validateOrder = UserOrderSchema.parse(order);

    // result
    await userServices.addProductIntoUserOrders(Number(userId), validateOrder);

    // send valid response
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (error: any) {
    // send error response
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        message: error.message,
      },
    });
  }
};

// retrieve all orders for a specific route
const getSpecificUserOrders = async (req: Request, res: Response) => {
  try {
    // get userId from req.params
    const { userId } = req.params;

    // result
    const result = await userServices.getSpecificUserOrdersFromDB(
      Number(userId),
    );

    // send valid response
    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    // send error response
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        message: error.message,
      },
    });
  }
};

// export user controllers
export const userControllers = {
  createUser,
  getAllUsers,
  getSpecificUser,
  updateUser,
  deleteUser,
  addProduct,
  getSpecificUserOrders,
};
