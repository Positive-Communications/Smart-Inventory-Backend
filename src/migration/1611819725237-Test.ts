import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1611819725237 implements MigrationInterface {
    name = 'Test1611819725237'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "dateAdded"`);
        await queryRunner.query(`ALTER TABLE "items" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ADD "carrierStatus" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ADD "pallet" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ADD "carrierNumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ADD "dateTime" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "dateTime"`);
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "carrierNumber"`);
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "pallet"`);
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "carrierStatus"`);
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "items" ADD "dateAdded" character varying NOT NULL`);
    }

}
