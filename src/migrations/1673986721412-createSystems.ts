import { MigrationInterface, QueryRunner } from "typeorm";

export class createSystems1673986721412 implements MigrationInterface {
    name = 'createSystems1673986721412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systems" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systems" DROP COLUMN "updateAt"`);
    }

}
