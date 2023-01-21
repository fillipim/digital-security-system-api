import AppDataSource from "../data-source";
import { System } from "../entities/system.entity";
import { ISearchSystem } from "../interfaces/system";

export const findSystemService = async (searchData: ISearchSystem) => {
  const systemRepository = AppDataSource.getRepository(System);
  const systemQueryBuilder = systemRepository.createQueryBuilder("systems");

  let searchQuery = `${
    searchData.description ? "systems.description LIKE :description or" : ""
  } ${searchData.acronym ? "systems.acronym = :acronym or" : ""} ${
    searchData.systemEmail
      ? `systems.systemEmail = '${searchData.systemEmail}'`
      : ""
  }`;

  if (searchQuery.trim().slice(-2) === "or") {
    searchQuery = searchQuery.trim().slice(0, -3);
  }

  let limit = 10;
  let offset = Number(searchData.offset);

  if (!offset) {
    offset = 0;
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
