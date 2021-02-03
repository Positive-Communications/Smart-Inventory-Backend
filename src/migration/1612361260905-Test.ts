import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612361260905 implements MigrationInterface {
    name = 'Test1612361260905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "presets" ("id" SERIAL NOT NULL, "presetName" character varying NOT NULL, CONSTRAINT "PK_87dcddfb798d56670dc16403854" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "presets"`);
    }

}
