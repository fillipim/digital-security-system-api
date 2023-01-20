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

  updateSystemSerializer.validate(updateData, {
      stripUnknown: true,
      abortEarly: true,
    })
    .catch((err) => {
      throw new AppError(err.errors[0], 400);
    });

  systemRepository.update(systemId, {
    ...findSystem,
    ...updateData,
  });

  const system = systemRepository.findOneBy({ id: systemId });

  return system;
};
