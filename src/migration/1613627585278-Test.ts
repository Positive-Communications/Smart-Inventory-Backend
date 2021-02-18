import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613627585278 implements MigrationInterface {
    name = 'Test1613627585278'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "presets" DROP CONSTRAINT "FK_5a5997986f331a95d545e5089c8"`);
        await queryRunner.query(`COMMENT ON COLUMN "presets"."sectionId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "presets" DROP CONSTRAINT "REL_5a5997986f331a95d545e5089c"`);
        await queryRunner.query(`ALTER TABLE "presets" ADD CONSTRAINT "FK_5a5997986f331a95d545e5089c8" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "presets" DROP CONSTRAINT "FK_5a5997986f331a95d545e5089c8"`);
        await queryRunner.query(`ALTER TABLE "presets" ADD CONSTRAINT "REL_5a5997986f331a95d545e5089c" UNIQUE ("sectionId")`);
        await queryRunner.query(`COMMENT ON COLUMN "presets"."sectionId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "presets" ADD CONSTRAINT "FK_5a5997986f331a95d545e5089c8" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
