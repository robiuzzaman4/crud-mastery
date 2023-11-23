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

// export user routes
export const userRoutes = router;
