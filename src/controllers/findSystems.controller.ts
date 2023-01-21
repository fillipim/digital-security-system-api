import { Request, Response } from "express";
import { findSystemService } from "../services/findSystems.service";

export const findSystemController = async (req: Request, res: Response) => {
  const systems = await findSystemService(req.query);

  return res.status(200).json(systems);
};
