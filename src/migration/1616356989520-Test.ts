import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1616356989520 implements MigrationInterface {
    name = 'Test1616356989520'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "demo" DROP COLUMN "uuid"`);
        await queryRunner.query(`ALTER TABLE "device" ADD "uuid" character varying NOT NULL DEFAULT 'unrecognized'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616356989766'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616355754663'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "device" DROP COLUMN "uuid"`);
        await queryRunner.query(`ALTER TABLE "demo" ADD "uuid" character varying NOT NULL DEFAULT 'unrecognized'`);
    }

}
