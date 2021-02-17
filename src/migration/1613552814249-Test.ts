import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613552814249 implements MigrationInterface {
    name = 'Test1613552814249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_8ca83fafbaa8d23f54a26aed401"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "bayId"`);
        await queryRunner.query(`ALTER TABLE "bays" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "bays" ADD CONSTRAINT "UQ_76db522b3de363788ffdb619c06" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "bays" ADD CONSTRAINT "FK_76db522b3de363788ffdb619c06" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bays" DROP CONSTRAINT "FK_76db522b3de363788ffdb619c06"`);
        await queryRunner.query(`ALTER TABLE "bays" DROP CONSTRAINT "UQ_76db522b3de363788ffdb619c06"`);
        await queryRunner.query(`ALTER TABLE "bays" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "bayId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_8ca83fafbaa8d23f54a26aed401" FOREIGN KEY ("bayId") REFERENCES "bays"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
