/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import UserValidationSchema, { UserOrderSchema } from "./user.validation";
import { userServices } from "./user.service";

// create user controller
const createUser = async (req: Request, res: Response) => {
  try {
    // get user data from req.body
    const user = req.body;

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
      message: error?.issues[0]?.message || "Something went wrong!",
      error: {
        code: 404,
        description: error?.issues[0]?.message || "Something went wrong!",
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
      message: error.message || "Something went wrong!",
      error: {
        code: 404,
        description: error.message || "Something went wrong!",
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
      message: error.message || "Something went wrong!",
      error: {
        code: 404,
        description: error.message || "Something went wrong!",
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
    const user = req.body;

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
      message: error.message || "Something went wrong!",
      error: {
        code: 404,
        description: error.message || "Something went wrong!",
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
      message: error.message || "Something went wrong!",
      error: {
        code: 404,
        description: error.message || "Something went wrong!",
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
      message:  error?.issues ? error?.issues[0]?.message : error.message,
      error: {
        code: 404,
        description: error?.issues ? error?.issues[0]?.message : error.message,
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
      message: error.message || "Something went wrong!",
      error: {
        code: 404,
        description: error.message || "Something went wrong!",
      },
    });
  }
};

// calculate total price of orders for a specific user controller
const getTotalPriceOfOrders = async (req: Request, res: Response) => {
  try {
    // get userId from req.params
    const { userId } = req.params;

    // result
    const result = await userServices.getTotalPriceFromUserOrder(
      Number(userId),
    );

    // send valid response
    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
      data: {
        totalPrice: result,
      },
    });
  } catch (error: any) {
    // send error response
    res.status(404).json({
      success: false,
      message: error.message || "Something went wrong!",
      error: {
        code: 404,
        description: error.message || "Something went wrong!",
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
  getTotalPriceOfOrders,
};
