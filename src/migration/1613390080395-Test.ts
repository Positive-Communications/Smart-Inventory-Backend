import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613390080395 implements MigrationInterface {
    name = 'Test1613390080395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "map" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "store"."map" IS NULL`);
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "storageType" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "store"."storageType" IS NULL`);
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "isActive" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "store"."isActive" IS NULL`);
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "hasErrors" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "store"."hasErrors" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "store"."hasErrors" IS NULL`);
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "hasErrors" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "store"."isActive" IS NULL`);
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "isActive" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "store"."storageType" IS NULL`);
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "storageType" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "store"."map" IS NULL`);
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "map" SET NOT NULL`);
    }

}
