import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { createSystemMock, updateSystemMock } from "../../mocks";

describe("/systems", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("PATCH - Must be able to update the system", async () => {
    const system = await request(app).post("/systems").send(createSystemMock);
    await request(app)
      .patch(`/systems/${system.body.id}`)
      .send(updateSystemMock);
    const systems = await request(app).get(`/systems?acronym=${updateSystemMock.acronym}`)
    
    expect(systems.body.systems[0].description).toBe(updateSystemMock.description);
    expect(systems.body.systems[0].acronym).toBe(updateSystemMock.acronym);
    expect(systems.body.systems[0].justificationChange).toBe(
      updateSystemMock.justificationChange
    );
    expect(systems.body.systems[0].lastChangeUser).toBe(updateSystemMock.lastChangeUser);
    expect(systems.body.systems[0].status).toBe(updateSystemMock.status);
    expect(systems.status).toBe(200);
  });
});
