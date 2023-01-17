import { Request, Response } from "express";
import { createSystemService } from "../services/createSystem.service";


export const createSystemController = async (req: Request, res: Response) => {
    const system = await createSystemService(req.body);
    return res.status(201).json(system);
};