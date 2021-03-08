import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1615216243314 implements MigrationInterface {
    name = 'Test1615216243314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "move" ADD "pendingMoveFrom" character varying NOT NULL DEFAULT 'empty'`);
        await queryRunner.query(`ALTER TABLE "move" ADD "pendingMoveTo" character varying NOT NULL DEFAULT 'empty'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1615216243549'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1615212958202'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "move" DROP COLUMN "pendingMoveTo"`);
        await queryRunner.query(`ALTER TABLE "move" DROP COLUMN "pendingMoveFrom"`);
    }

}
