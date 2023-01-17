import "reflect-metadata";
import "express-async-errors";
import express from "express";
import systemRoutes from "./routes/systemRoutes";
import { errorHandler } from "./error/error";

const app = express();
app.use(express.json());

app.use("/systems", systemRoutes);

app.use(errorHandler);

export default app;