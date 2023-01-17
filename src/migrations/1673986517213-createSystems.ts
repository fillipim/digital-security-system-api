import { MigrationInterface, QueryRunner } from "typeorm";

export class createSystems1673986517213 implements MigrationInterface {
    name = 'createSystems1673986517213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systems" ADD "updateAt" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systems" DROP COLUMN "updateAt"`);
    }

}
