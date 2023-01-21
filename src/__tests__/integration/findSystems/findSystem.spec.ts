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

  it("GET - Must be able to filter with all parameters", async () => {
    await request(app).post("/systems").send(createSystemMock)
    const response = await request(app).get(
      `/systems?systemEmail=${createSystemMock.systemEmail}&description=${createSystemMock.description}&acronym=${createSystemMock.acronym}`
    );

    expect(response.body.systems).toHaveLength(1);
    expect(response.status).toBe(200);
  });

  it("GET - Must be able to filter with description and email", async () => {
    const response = await request(app).get(
      `/systems?systemEmail=${createSystemMock.systemEmail}&description=${createSystemMock.description}`
    );

    expect(response.body.systems).toHaveLength(1);
    expect(response.status).toBe(200);
  });

  it("GET - Must be able to filter with acronym and email", async () => {
    const response = await request(app).get(
      `/systems?acronym=${createSystemMock.acronym}&systemEmail=${createSystemMock.systemEmail}`
    );

    expect(response.body.systems).toHaveLength(1);
    expect(response.status).toBe(200);
  });

  it("GET - Must be able to filter with acronym and description", async () => {
    const response = await request(app).get(
      `/systems?description=${createSystemMock.description}&acronym=${createSystemMock.acronym}`
    );

    expect(response.body.systems).toHaveLength(1);
    expect(response.status).toBe(200);
  });

  it("GET - Must be able to filter with email only", async () => {
    const response = await request(app).get(
      `/systems?systemEmail=${createSystemMock.systemEmail}`
    );

    expect(response.body.systems).toHaveLength(1);
    expect(response.status).toBe(200);
  });
  it("GET - Must be able to filter with description only", async () => {
    const response = await request(app).get(
      `/systems?description=${createSystemMock.description}`
    );

    expect(response.body.systems).toHaveLength(1);
    expect(response.status).toBe(200);
  });
  it("GET - Must be able to filter with acronym only", async () => {
    const response = await request(app).get(
      `/systems?acronym=${createSystemMock.acronym}`
    );

    expect(response.body.systems).toHaveLength(1);
    expect(response.status).toBe(200);
  });
});
