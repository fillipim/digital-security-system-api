import { MigrationInterface, QueryRunner } from "typeorm";

export class createSystems1673986909464 implements MigrationInterface {
    name = 'createSystems1673986909464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systems" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systems" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
