import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612361450659 implements MigrationInterface {
    name = 'Test1612361450659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "presets" ADD "sectionId" integer`);
        await queryRunner.query(`ALTER TABLE "presets" ADD CONSTRAINT "UQ_5a5997986f331a95d545e5089c8" UNIQUE ("sectionId")`);
        await queryRunner.query(`ALTER TABLE "presets" ADD CONSTRAINT "FK_5a5997986f331a95d545e5089c8" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "presets" DROP CONSTRAINT "FK_5a5997986f331a95d545e5089c8"`);
        await queryRunner.query(`ALTER TABLE "presets" DROP CONSTRAINT "UQ_5a5997986f331a95d545e5089c8"`);
        await queryRunner.query(`ALTER TABLE "presets" DROP COLUMN "sectionId"`);
    }

}
