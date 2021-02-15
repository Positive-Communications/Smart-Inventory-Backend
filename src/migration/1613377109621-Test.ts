import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613377109621 implements MigrationInterface {
    name = 'Test1613377109621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_742c92af4b5861bc19d976d2b2e"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "dispatchGateId"`);
        await queryRunner.query(`ALTER TABLE "gate" ADD "dispatchedProductsId" integer`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_9a259d52d4d11963ae4ec58bdd6" FOREIGN KEY ("dispatchedProductsId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_9a259d52d4d11963ae4ec58bdd6"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP COLUMN "dispatchedProductsId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "dispatchGateId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_742c92af4b5861bc19d976d2b2e" FOREIGN KEY ("dispatchGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
