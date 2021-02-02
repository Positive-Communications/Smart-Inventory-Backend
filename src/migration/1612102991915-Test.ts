import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612102991915 implements MigrationInterface {
    name = 'Test1612102991915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "device" ADD "accessToId" integer`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_8dfadc67a7ade663ee3a8859dcb" FOREIGN KEY ("accessToId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_8dfadc67a7ade663ee3a8859dcb"`);
        await queryRunner.query(`ALTER TABLE "device" DROP COLUMN "accessToId"`);
    }

}
