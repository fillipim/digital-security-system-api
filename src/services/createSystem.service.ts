import AppDataSource from "../data-source";
import { System } from "../entities/system.entity";
import { AppError } from "../error/error";
import { IRequestSystem } from "../interfaces/system";
import { createSystemSerializer } from "../serializers/createSystem.serializer";

export const createSystemService = async (body: IRequestSystem) => {
  const systemRepository = AppDataSource.getRepository(System);

  const validateData = await createSystemSerializer
    .validate(body, { stripUnknown: true, abortEarly: true })
    .catch((err) => {
      throw new AppError(err.errors[0], 400);
    });

  const createSystem = systemRepository.create({...validateData, updatedAt: new Date()});

  const system = await systemRepository.save(createSystem);

  return system;
};
