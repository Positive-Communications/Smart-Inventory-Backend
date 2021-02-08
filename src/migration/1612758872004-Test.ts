import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612758872004 implements MigrationInterface {
    name = 'Test1612758872004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_unit" DROP CONSTRAINT "FK_fdaa18f9ede4b96e4deaa98a4d3"`);
        await queryRunner.query(`CREATE TABLE "order_que" ("id" SERIAL NOT NULL, "vehicleCanEnterPremisesWhenRemaining" integer NOT NULL, "vehicleWillBePreparedAndRemainOnStandBy" integer NOT NULL, "branchId" integer, CONSTRAINT "REL_275f683e509344ad3b87de1936" UNIQUE ("branchId"), CONSTRAINT "PK_57689510cb8488f95d5a702ecc4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_unit" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "displayAs"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "isPallet"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "isTrackedByRFID"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "monthsLeftToExpire" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "hasErrors" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "isStoredOnPallet" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "palletIsTrackedByRFID" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "unitId" integer`);
        await queryRunner.query(`ALTER TABLE "order_que" ADD CONSTRAINT "FK_275f683e509344ad3b87de19367" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_2ee96d5eff55f14a6e37470b782" FOREIGN KEY ("unitId") REFERENCES "product_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_2ee96d5eff55f14a6e37470b782"`);
        await queryRunner.query(`ALTER TABLE "order_que" DROP CONSTRAINT "FK_275f683e509344ad3b87de19367"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "unitId"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "palletIsTrackedByRFID"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "isStoredOnPallet"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "hasErrors"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "monthsLeftToExpire"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "isTrackedByRFID" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "isPallet" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "displayAs" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_unit" ADD "productId" integer`);
        await queryRunner.query(`DROP TABLE "order_que"`);
        await queryRunner.query(`ALTER TABLE "product_unit" ADD CONSTRAINT "FK_fdaa18f9ede4b96e4deaa98a4d3" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
