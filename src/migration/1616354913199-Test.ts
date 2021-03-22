import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1616354913199 implements MigrationInterface {
    name = 'Test1616354913199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "device" ADD "isFixed" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616354915732'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616350571566'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "device" DROP COLUMN "isFixed"`);
    }

}
