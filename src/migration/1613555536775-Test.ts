import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613555536775 implements MigrationInterface {
    name = 'Test1613555536775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bays" ALTER COLUMN "hasErrors" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "bays"."hasErrors" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "bays"."hasErrors" IS NULL`);
        await queryRunner.query(`ALTER TABLE "bays" ALTER COLUMN "hasErrors" SET NOT NULL`);
    }

}
