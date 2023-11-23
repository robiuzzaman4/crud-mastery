import express from "express";
import { userControllers } from "./user.controller";

// define router
const router = express.Router();

// create a new user route
router.post("/users", userControllers.createUser);

// get all user route
router.get("/users", userControllers.getAllUsers);

export const userRoutes = router;
