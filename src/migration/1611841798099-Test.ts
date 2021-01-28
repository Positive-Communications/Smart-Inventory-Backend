import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1611841798099 implements MigrationInterface {
    name = 'Test1611841798099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alerts" ADD "itemId" integer`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_f170400e40127fba073ab66b769" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_f170400e40127fba073ab66b769"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP COLUMN "itemId"`);
    }

}
