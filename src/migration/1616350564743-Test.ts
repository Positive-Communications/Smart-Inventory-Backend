import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1616350564743 implements MigrationInterface {
    name = 'Test1616350564743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "demo" ADD "isFixed" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "demo" ADD "isHandHeld" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "demo" ADD "isSensor" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616350571566'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616338797086'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "demo" DROP COLUMN "isSensor"`);
        await queryRunner.query(`ALTER TABLE "demo" DROP COLUMN "isHandHeld"`);
        await queryRunner.query(`ALTER TABLE "demo" DROP COLUMN "isFixed"`);
    }

}
