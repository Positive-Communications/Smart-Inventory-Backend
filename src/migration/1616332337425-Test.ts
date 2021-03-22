import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1616332337425 implements MigrationInterface {
    name = 'Test1616332337425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "demo" RENAME COLUMN "moveBy" TO "gate"`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616332341985'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616240232540'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "demo" RENAME COLUMN "gate" TO "moveBy"`);
    }

}
