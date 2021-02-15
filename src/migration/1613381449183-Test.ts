import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613381449183 implements MigrationInterface {
    name = 'Test1613381449183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "numberOfProducts" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."numberOfProducts" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "product_unit"."numberOfProducts" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product_unit" ALTER COLUMN "numberOfProducts" SET NOT NULL`);
    }

}
