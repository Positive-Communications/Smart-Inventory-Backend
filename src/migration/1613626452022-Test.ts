import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613626452022 implements MigrationInterface {
    name = 'Test1613626452022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sections" ALTER COLUMN "role" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "sections"."role" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "sections"."capacity" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sections" ALTER COLUMN "capacity" SET DEFAULT '0'`);
        await queryRunner.query(`COMMENT ON COLUMN "sections"."hasErrors" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sections" ALTER COLUMN "hasErrors" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sections" ALTER COLUMN "hasErrors" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "sections"."hasErrors" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sections" ALTER COLUMN "capacity" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "sections"."capacity" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "sections"."role" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sections" ALTER COLUMN "role" SET NOT NULL`);
    }

}
