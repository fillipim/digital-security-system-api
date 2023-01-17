import AppDataSource from "../data-source"
import { System } from "../entities/system.entity"
import { iUpdateSystem } from "../interfaces/system"


export const updateSystemService = async (updateData: iUpdateSystem, systemId: string): Promise<System> => {
    const systemRepository = AppDataSource.getRepository(System);

    const findSystem = systemRepository.findOneBy({id: systemId});

    systemRepository.update(systemId, {
        ...findSystem,
        ...updateData
    });

    const system = systemRepository.findOneBy({id: systemId});

    return system;
}