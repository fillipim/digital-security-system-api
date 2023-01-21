import { Router } from "express";
import { createSystemController } from "../controllers/createSystem.controller";
import { findSystemController } from "../controllers/findSystems.controller";
import { updateSystemController } from "../controllers/updateSystem.controller";

const systemRoutes = Router();

systemRoutes.post("", createSystemController);
systemRoutes.patch("/:id", updateSystemController);
systemRoutes.get("", findSystemController)

export default systemRoutes;