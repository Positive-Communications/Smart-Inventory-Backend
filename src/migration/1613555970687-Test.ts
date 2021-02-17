import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613555970687 implements MigrationInterface {
    name = 'Test1613555970687'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bays" DROP CONSTRAINT "FK_76db522b3de363788ffdb619c06"`);
        await queryRunner.query(`COMMENT ON COLUMN "bays"."productId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "bays" DROP CONSTRAINT "UQ_76db522b3de363788ffdb619c06"`);
        await queryRunner.query(`ALTER TABLE "bays" ADD CONSTRAINT "FK_76db522b3de363788ffdb619c06" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bays" DROP CONSTRAINT "FK_76db522b3de363788ffdb619c06"`);
        await queryRunner.query(`ALTER TABLE "bays" ADD CONSTRAINT "UQ_76db522b3de363788ffdb619c06" UNIQUE ("productId")`);
        await queryRunner.query(`COMMENT ON COLUMN "bays"."productId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "bays" ADD CONSTRAINT "FK_76db522b3de363788ffdb619c06" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
