import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { createSystemMock } from "../../mocks";

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

  it("POST - Must be able to create system", async () => {
    const response = await request(app).post("/systems").send(createSystemMock);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("acronym");
    expect(response.body).toHaveProperty("systemEmail");
    expect(response.status).toBe(201);
  });

  it("POST - Should not be able to create post without description", async () => {
    const data = { ...createSystemMock, description: "" };

    const response = await request(app).post("/systems").send(data);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  it("POST - Should not be able to create post without acronym", async () => {
    const data = { ...createSystemMock, acronym: "" };

    const response = await request(app).post("/systems").send(data);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
});
