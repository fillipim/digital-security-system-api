import { MigrationInterface, QueryRunner } from "typeorm";

export class createSystems1673966537244 implements MigrationInterface {
    name = 'createSystems1673966537244'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "systems" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(100) NOT NULL, "acronym" character varying(100) NOT NULL, "systemEmail" character varying(100), "url" character varying(50), "lastChangeUser" character varying(100) NOT NULL, CONSTRAINT "PK_aec3139aedeb09c5ae27f2c94d3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "systems"`);
    }

}
