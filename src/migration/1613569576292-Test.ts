import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613569576292 implements MigrationInterface {
    name = 'Test1613569576292'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gate" ADD "isForPackaging" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "gate" ADD "isForStorage" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "gate" ADD "isForDispatch" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gate" DROP COLUMN "isForDispatch"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP COLUMN "isForStorage"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP COLUMN "isForPackaging"`);
    }

}
