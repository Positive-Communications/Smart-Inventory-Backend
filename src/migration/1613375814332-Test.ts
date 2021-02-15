import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613375814332 implements MigrationInterface {
    name = 'Test1613375814332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_2ee96d5eff55f14a6e37470b782"`);
        await queryRunner.query(`CREATE TABLE "product_unit_product_product" ("productUnitId" integer NOT NULL, "productId" integer NOT NULL, CONSTRAINT "PK_14a903a0b1feafe7a13f2842c57" PRIMARY KEY ("productUnitId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0d9888e707d57f50499dd21cb8" ON "product_unit_product_product" ("productUnitId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ac4d48c76298b52397fcb2f42f" ON "product_unit_product_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "unitId"`);
        await queryRunner.query(`ALTER TABLE "product_unit_product_product" ADD CONSTRAINT "FK_0d9888e707d57f50499dd21cb87" FOREIGN KEY ("productUnitId") REFERENCES "product_unit"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_unit_product_product" ADD CONSTRAINT "FK_ac4d48c76298b52397fcb2f42f4" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_unit_product_product" DROP CONSTRAINT "FK_ac4d48c76298b52397fcb2f42f4"`);
        await queryRunner.query(`ALTER TABLE "product_unit_product_product" DROP CONSTRAINT "FK_0d9888e707d57f50499dd21cb87"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "unitId" integer`);
        await queryRunner.query(`DROP INDEX "IDX_ac4d48c76298b52397fcb2f42f"`);
        await queryRunner.query(`DROP INDEX "IDX_0d9888e707d57f50499dd21cb8"`);
        await queryRunner.query(`DROP TABLE "product_unit_product_product"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_2ee96d5eff55f14a6e37470b782" FOREIGN KEY ("unitId") REFERENCES "product_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
