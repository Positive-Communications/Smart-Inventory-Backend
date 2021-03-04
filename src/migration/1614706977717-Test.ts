import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1614706977717 implements MigrationInterface {
    name = 'Test1614706977717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alerts" ADD "tagId" integer`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_2a04e21b4f2c1f56425a1dbc24e" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_2a04e21b4f2c1f56425a1dbc24e"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP COLUMN "tagId"`);
    }

}
