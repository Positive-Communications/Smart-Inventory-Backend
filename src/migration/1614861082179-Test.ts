import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1614861082179 implements MigrationInterface {
    name = 'Test1614861082179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transaction" ("id" SERIAL NOT NULL, "companyID" integer NOT NULL, "branchID" integer, "quantity" integer NOT NULL, "timeStamp" character varying NOT NULL, "type" character varying NOT NULL, "date" character varying NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1614861082419'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1614850021271'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`DROP TABLE "transaction"`);
    }

}
