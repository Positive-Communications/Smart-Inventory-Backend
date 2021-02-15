import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613320231345 implements MigrationInterface {
    name = 'Test1613320231345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_unit" RENAME COLUMN "unit" TO "unitId"`);
        await queryRunner.query(`CREATE TABLE "unit" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4252c4be609041e559f0c80f58a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_unit" DROP COLUMN "unitId"`);
        await queryRunner.query(`ALTER TABLE "product_unit" ADD "unitId" integer`);
        await queryRunner.query(`ALTER TABLE "product_unit" ADD CONSTRAINT "FK_1b0079484a0d989857b7a0c737b" FOREIGN KEY ("unitId") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_unit" DROP CONSTRAINT "FK_1b0079484a0d989857b7a0c737b"`);
        await queryRunner.query(`ALTER TABLE "product_unit" DROP COLUMN "unitId"`);
        await queryRunner.query(`ALTER TABLE "product_unit" ADD "unitId" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "unit"`);
        await queryRunner.query(`ALTER TABLE "product_unit" RENAME COLUMN "unitId" TO "unit"`);
    }

}
