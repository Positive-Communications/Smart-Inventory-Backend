import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613555614754 implements MigrationInterface {
    name = 'Test1613555614754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bays" ALTER COLUMN "isActive" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "bays"."isActive" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "bays"."isActive" IS NULL`);
        await queryRunner.query(`ALTER TABLE "bays" ALTER COLUMN "isActive" SET NOT NULL`);
    }

}
