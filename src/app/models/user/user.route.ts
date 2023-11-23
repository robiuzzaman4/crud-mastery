import express from "express";
import { userControllers } from "./user.controller";

// define router
const router = express.Router();

// create a new user route
router.post("/users", userControllers.createUser);

// get all user route
router.get("/users", userControllers.getAllUsers);

// get specific user route
router.get("/users/:userId", userControllers.getSpecificUser);

// update an existing user route
router.put("/users/:userId", userControllers.updateUser);

// delete an existing user route
router.delete("/users/:userId", userControllers.deleteUser);

// export user routes
export const userRoutes = router;
