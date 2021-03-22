import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1616357220533 implements MigrationInterface {
    name = 'Test1616357220533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "device" ("id" SERIAL NOT NULL, "name" character varying, "isHandHeld" boolean NOT NULL DEFAULT false, "isSensor" boolean NOT NULL DEFAULT false, "isTablet" boolean NOT NULL DEFAULT false, "isWeb" boolean NOT NULL DEFAULT false, "uuid" character varying NOT NULL DEFAULT 'unrecognized', "isFixed" boolean NOT NULL DEFAULT false, "role" character varying NOT NULL DEFAULT 'empty', "allowPalletsToBeCountedManually" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT false, "hasErrors" boolean NOT NULL DEFAULT false, "doNotAllowRemovalOfEmptyPallet" boolean NOT NULL DEFAULT false, "verifyStoredUsingHandHeld" boolean NOT NULL DEFAULT false, "showProductCountError" boolean NOT NULL DEFAULT false, "doNotAllowRemoval" boolean NOT NULL DEFAULT false, "verifyProductNotTrackedByRFID" boolean NOT NULL DEFAULT false, "automaticallyActivateRecallProductIfRequired" boolean NOT NULL DEFAULT false, "recordEmptyPallets" boolean NOT NULL DEFAULT false, "dispatchingOrReceiving" boolean NOT NULL DEFAULT false, "sectionsId" integer, "baysId" integer, "branchId" integer, CONSTRAINT "PK_2dc10972aa4e27c01378dad2c72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616357220785'`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_41874d2ecb7400a606b090f5e88" FOREIGN KEY ("sectionsId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_44ed2374e3b14318d8fde9658d6" FOREIGN KEY ("baysId") REFERENCES "bays"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_cae70c648a6b56d55b38db00013" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_2b3651f3fd95470304fabc1f02a" FOREIGN KEY ("deviceId") REFERENCES "device"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_2b3651f3fd95470304fabc1f02a"`);
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_cae70c648a6b56d55b38db00013"`);
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_44ed2374e3b14318d8fde9658d6"`);
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_41874d2ecb7400a606b090f5e88"`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registered" SET DEFAULT '1616356989766'`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."registered" IS NULL`);
        await queryRunner.query(`DROP TABLE "device"`);
    }

}
