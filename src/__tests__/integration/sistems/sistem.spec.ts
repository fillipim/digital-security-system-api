import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { includeSistemMock, searchSistemMock } from "../../mocks";

describe("/posts", () => {
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
    })


    test("POST /sistems - Must be able to include post", async () => {
        
        const response = await request(app).post("/sistems").send(includeSistemMock);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("message");
    });

    test("GET /sistems - Get sistems by body params", async () => {
        
        const response = await request(app).get("/sistems").send(searchSistemMock);

        expect(response.body).toHaveLength(1);
    });

    test("GET /sistems - Not found sistems", async () => {
        const response =  await request(app).get("/sistems").send(searchSistemMock);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message");
    });

});