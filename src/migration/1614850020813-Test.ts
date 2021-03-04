import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1614850020813 implements MigrationInterface {
    name = 'Test1614850020813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ADD "registered" character varying NOT NULL DEFAULT '1614850021271'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "registered"`);
    }

}
