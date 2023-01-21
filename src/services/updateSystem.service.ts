import AppDataSource from "../data-source";
import { System } from "../entities/system.entity";
import { AppError } from "../error/error";
import { IUpdateSystem } from "../interfaces/system";
import { updateSystemSerializer } from "../serializers/updateSystem.serializer";

export const updateSystemService = async (
  updateData: IUpdateSystem,
  systemId: string
): Promise<System> => {
  const systemRepository = AppDataSource.getRepository(System);

  const findSystem = systemRepository.findOneBy({ id: systemId });

  if (!findSystem) {
    throw new AppError("System not found", 404);
  }

  updateSystemSerializer
    .validate(updateData, {
      stripUnknown: true,
      abortEarly: true,
    })
    .catch((err) => {
      throw new AppError(err.errors[0], 400);
    });

  const systemUpdated = systemRepository.create({
    ...findSystem,
    ...updateData,
  });

  await systemRepository.update(systemId, systemUpdated);

  await systemRepository.findOneBy({ id: systemId });

  const system = await systemRepository.findOneBy({ id: systemId });

  return system;
};
