import { Like } from "typeorm";
import AppDataSource from "../data-source";
import { System } from "../entities/system.entity";
import { ISearchSystem } from "../interfaces/system";

export const findSystemService = async (searchData: ISearchSystem) => {
  const systemRepository = AppDataSource.getRepository(System);
  const systemQueryBuilder = systemRepository.createQueryBuilder("systems");

  let searchQuery = "";

  let limit = 10;
  let offset = Number(searchData.offset);

  if (!offset) {
    offset = 0;
  }

  if (searchData.description && searchData.acronym && searchData.systemEmail) {
    searchQuery += `systems.description LIKE :description  or systems.acronym = :acronym or systems.systemEmail = '${searchData.systemEmail}'`;
  } else if (searchData.acronym) {
    searchQuery += ` systems.acronym = :acronym ${
      searchData.systemEmail ? `or systems.systemEmail = '${searchData.systemEmail}` : ""
    } ${searchData.description ? " or systems.description LIKE :description" : ""}
`;
  } else if (searchData.systemEmail) {
    searchQuery += ` systems.systemEmail = '${searchData.systemEmail}' ${searchData.description ? "or systems.description LIKE :description" : ""}
`;
  } else if (searchData.description) {
    searchQuery += `systems.description LIKE :description`;
  }

  const systems = await systemQueryBuilder
    .select()
    .where(searchQuery, {
      ...searchData,
      description: `%${searchData.description}%`,
    })
    .limit(limit)
    .offset(offset)
    .orderBy("systems.updatedAt", "DESC")
    .getMany();

  return { total: 19, systems: systems };
};
