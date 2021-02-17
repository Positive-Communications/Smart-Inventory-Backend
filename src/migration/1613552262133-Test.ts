import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613552262133 implements MigrationInterface {
    name = 'Test1613552262133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "bayId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_8ca83fafbaa8d23f54a26aed401" FOREIGN KEY ("bayId") REFERENCES "bays"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_8ca83fafbaa8d23f54a26aed401"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "bayId"`);
    }

}
