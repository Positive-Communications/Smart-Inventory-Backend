import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613376092052 implements MigrationInterface {
    name = 'Test1613376092052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pallet" ADD "unitId" integer`);
        await queryRunner.query(`ALTER TABLE "pallet" ADD CONSTRAINT "FK_e9f65f218a41b1734623f1f92ac" FOREIGN KEY ("unitId") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pallet" DROP CONSTRAINT "FK_e9f65f218a41b1734623f1f92ac"`);
        await queryRunner.query(`ALTER TABLE "pallet" DROP COLUMN "unitId"`);
    }

}
