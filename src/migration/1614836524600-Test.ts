import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1614836524600 implements MigrationInterface {
    name = 'Test1614836524600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "headOffice" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."headOffice" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "streetRoad" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."streetRoad" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "primaryNumber" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."primaryNumber" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "secondaryNumber" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."secondaryNumber" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "company"."secondaryNumber" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "secondaryNumber" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."primaryNumber" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "primaryNumber" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."streetRoad" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "streetRoad" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."headOffice" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "headOffice" SET NOT NULL`);
    }

}
