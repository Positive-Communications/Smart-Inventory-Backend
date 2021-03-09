import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1615261816151 implements MigrationInterface {
    name = 'Test1615261816151'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" ADD "scanId" integer`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "previousScanId" integer`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1615261816430'`);
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "FK_dbe69b7343a16d6941cd8a1f3aa" FOREIGN KEY ("scanId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "FK_7c4832d8a8c619b3fd2a7960d04" FOREIGN KEY ("previousScanId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "FK_7c4832d8a8c619b3fd2a7960d04"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "FK_dbe69b7343a16d6941cd8a1f3aa"`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1615216243549'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "previousScanId"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "scanId"`);
    }

}
