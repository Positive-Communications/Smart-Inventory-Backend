import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613385227768 implements MigrationInterface {
    name = 'Test1613385227768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "numberOfProducts" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."numberOfProducts" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "isTrackedByRFID" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."isTrackedByRFID" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "useUnitAsDefault" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."useUnitAsDefault" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."useUnitAsDefault" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "useUnitAsDefault" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."isTrackedByRFID" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "isTrackedByRFID" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."numberOfProducts" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "numberOfProducts" DROP NOT NULL`);
    }

}
