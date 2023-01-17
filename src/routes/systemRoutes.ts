import { Router } from "express";
import { createSystemController } from "../controllers/createSystem.controller";
import { updateSystemController } from "../controllers/updateSystem.controller";

const systemRoutes = Router();

systemRoutes.post("", createSystemController);
systemRoutes.patch("/:id", updateSystemController)

export default systemRoutes;