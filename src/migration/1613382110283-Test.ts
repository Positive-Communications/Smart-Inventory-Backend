import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613382110283 implements MigrationInterface {
    name = 'Test1613382110283'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "isTrackedByRFID" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."isTrackedByRFID" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "useUnitAsDefault" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."useUnitAsDefault" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."useUnitAsDefault" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "useUnitAsDefault" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."isTrackedByRFID" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "isTrackedByRFID" SET NOT NULL`);
    }

}
