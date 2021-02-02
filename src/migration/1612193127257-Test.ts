import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612193127257 implements MigrationInterface {
    name = 'Test1612193127257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bays" DROP CONSTRAINT "FK_996a3f81668bae961c13e24bff8"`);
        await queryRunner.query(`ALTER TABLE "bays" RENAME COLUMN "storageId" TO "sectionsId"`);
        await queryRunner.query(`ALTER TABLE "bays" ADD CONSTRAINT "FK_78f00834699a17e6323bd2b9b78" FOREIGN KEY ("sectionsId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bays" DROP CONSTRAINT "FK_78f00834699a17e6323bd2b9b78"`);
        await queryRunner.query(`ALTER TABLE "bays" RENAME COLUMN "sectionsId" TO "storageId"`);
        await queryRunner.query(`ALTER TABLE "bays" ADD CONSTRAINT "FK_996a3f81668bae961c13e24bff8" FOREIGN KEY ("storageId") REFERENCES "storage_bay"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
