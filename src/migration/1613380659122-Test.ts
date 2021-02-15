import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613380659122 implements MigrationInterface {
    name = 'Test1613380659122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "status" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "isStoredOnPallet" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."isStoredOnPallet" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "palletIsTrackedByRFID" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."palletIsTrackedByRFID" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "product"."palletIsTrackedByRFID" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "palletIsTrackedByRFID" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."isStoredOnPallet" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "isStoredOnPallet" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "status" SET NOT NULL`);
    }

}
