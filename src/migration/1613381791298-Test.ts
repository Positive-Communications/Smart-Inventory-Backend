import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613381791298 implements MigrationInterface {
    name = 'Test1613381791298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_unit" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "product_unit" ADD CONSTRAINT "FK_fdaa18f9ede4b96e4deaa98a4d3" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_unit" DROP CONSTRAINT "FK_fdaa18f9ede4b96e4deaa98a4d3"`);
        await queryRunner.query(`ALTER TABLE "product_unit" DROP COLUMN "productId"`);
    }

}
