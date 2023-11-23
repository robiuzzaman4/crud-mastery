import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/models/user/user.route";

// define app
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// use all user routes
app.use("/api", userRoutes);

// default route
app.get("/", (req: Request, res: Response) => {
  res.send(`Crud Mastery Application Server Is Running.`);
});

export default app;
