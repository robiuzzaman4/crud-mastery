import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/models/user/user.route";
import config from "./config";

// define app
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// use all user routes
app.use("/api", userRoutes);

// default route
app.get("/", (req: Request, res: Response) => {
  res.send(`
  <h2 style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; color: #10b981;">
    <p>Crud Mastery application server is running on port <span style="color: #f97316;">${config.port}.</span></p> 
  </h2>
  `);
});

export default app;
