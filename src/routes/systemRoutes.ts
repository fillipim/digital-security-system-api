import { Router } from "express";
import { createSystemController } from "../controllers/createSystem.controller";

const systemRoutes = Router();

systemRoutes.post("", createSystemController);

export default systemRoutes;