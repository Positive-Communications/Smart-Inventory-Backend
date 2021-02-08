import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612783389222 implements MigrationInterface {
    name = 'Test1612783389222'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "device" ADD "branchId" integer`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_cae70c648a6b56d55b38db00013" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_cae70c648a6b56d55b38db00013"`);
        await queryRunner.query(`ALTER TABLE "device" DROP COLUMN "branchId"`);
    }

}
