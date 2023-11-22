import express, { Application, Request, Response } from "express";
import cors from "cors";

// define app
const app: Application = express();

// parsers
app.use(cors());
app.use(express.json());

// default route
app.get("/", (req: Request, res: Response) => {
  res.send(`Crud Mastery Application.`);
});

export default app;
