import { MigrationInterface, QueryRunner } from "typeorm";

export class createSystems1673968665954 implements MigrationInterface {
    name = 'createSystems1673968665954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systems" ALTER COLUMN "lastChangeUser" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systems" ALTER COLUMN "lastChangeUser" SET NOT NULL`);
    }

}
