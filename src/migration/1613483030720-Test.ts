import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613483030720 implements MigrationInterface {
    name = 'Test1613483030720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_unit" ADD "itemUnitId" integer`);
        await queryRunner.query(`ALTER TABLE "product_unit" ADD CONSTRAINT "FK_7fd28d8769409b22b710d58f7c9" FOREIGN KEY ("itemUnitId") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_unit" DROP CONSTRAINT "FK_7fd28d8769409b22b710d58f7c9"`);
        await queryRunner.query(`ALTER TABLE "product_unit" DROP COLUMN "itemUnitId"`);
    }

}
