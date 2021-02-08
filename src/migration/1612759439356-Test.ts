import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612759439356 implements MigrationInterface {
    name = 'Test1612759439356'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "status" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "status"`);
    }

}
