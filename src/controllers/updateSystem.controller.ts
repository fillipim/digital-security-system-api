import { Request, Response } from "express";
import { updateSystemService } from "../services/updateSystem.service";


export const updateSystemController = async(req: Request, res: Response) => {
    const systemUpdated = await updateSystemService(req.body, req.params.id)

    return res.status(200).json(systemUpdated)
}