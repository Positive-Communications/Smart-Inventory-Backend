import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1616338796668 implements MigrationInterface {
    name = 'Test1616338796668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "demo" ADD "uuid" character varying NOT NULL DEFAULT 'unrecognized'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616338797086'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616335138781'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "demo" DROP COLUMN "uuid"`);
    }

}
