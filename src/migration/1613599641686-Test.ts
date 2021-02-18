import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613599641686 implements MigrationInterface {
    name = 'Test1613599641686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gate" ADD "storesId" integer`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_70cef46ea5da47305a219cb2add" FOREIGN KEY ("storesId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_70cef46ea5da47305a219cb2add"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP COLUMN "storesId"`);
    }

}
