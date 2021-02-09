import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612869112812 implements MigrationInterface {
    name = 'Test1612869112812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "dispatchGateId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_742c92af4b5861bc19d976d2b2e" FOREIGN KEY ("dispatchGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_742c92af4b5861bc19d976d2b2e"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "dispatchGateId"`);
    }

}
