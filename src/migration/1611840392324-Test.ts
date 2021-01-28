import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1611840392324 implements MigrationInterface {
    name = 'Test1611840392324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "alerts" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_60f895662df096bfcdfab7f4b96" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "alerts"`);
    }

}
