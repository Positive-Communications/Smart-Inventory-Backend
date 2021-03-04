import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1614706179953 implements MigrationInterface {
    name = 'Test1614706179953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "scan_product_history" ("id" SERIAL NOT NULL, "timeStamp" character varying NOT NULL, "isReadByHandHeld" boolean NOT NULL DEFAULT false, "gateId" integer, "palletId" integer, "carrierId" integer, "tagId" integer, CONSTRAINT "PK_0e0fe776dbecb5dedb0664e62ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "epc" character varying NOT NULL, "hasErrors" boolean NOT NULL DEFAULT false, "status" character varying NOT NULL DEFAULT 'empty', "isAssigned" boolean NOT NULL DEFAULT false, "isProductTag" boolean NOT NULL DEFAULT false, "isPalletTag" boolean NOT NULL DEFAULT false, "isCarrierTag" boolean NOT NULL DEFAULT false, "productId" integer, "palletId" integer, "carrierId" integer, "companyId" integer, CONSTRAINT "UQ_3db76f27b458b9e2a052d6d7c21" UNIQUE ("epc"), CONSTRAINT "REL_ce9ac338a11b9c6621b931f93a" UNIQUE ("palletId"), CONSTRAINT "REL_aed3170b1f298c5c7df2862882" UNIQUE ("carrierId"), CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "scan_product_history" ADD CONSTRAINT "FK_3d0766626cecc48986ea5576728" FOREIGN KEY ("gateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "scan_product_history" ADD CONSTRAINT "FK_00463cd708c0403d179ff6a82ee" FOREIGN KEY ("palletId") REFERENCES "pallet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "scan_product_history" ADD CONSTRAINT "FK_a030c5ca41902eb707463b7cebb" FOREIGN KEY ("carrierId") REFERENCES "carrier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "scan_product_history" ADD CONSTRAINT "FK_50a23f94b42d32a972f0c340a9a" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "FK_1e685539b0827e801e5ac275db2" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "FK_ce9ac338a11b9c6621b931f93a3" FOREIGN KEY ("palletId") REFERENCES "pallet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "FK_aed3170b1f298c5c7df28628823" FOREIGN KEY ("carrierId") REFERENCES "carrier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "FK_40d3284c7c060f75caee62cf940" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_3873d79b8a1ff10ed0967736f87" FOREIGN KEY ("historyId") REFERENCES "scan_product_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_3873d79b8a1ff10ed0967736f87"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "FK_40d3284c7c060f75caee62cf940"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "FK_aed3170b1f298c5c7df28628823"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "FK_ce9ac338a11b9c6621b931f93a3"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "FK_1e685539b0827e801e5ac275db2"`);
        await queryRunner.query(`ALTER TABLE "scan_product_history" DROP CONSTRAINT "FK_50a23f94b42d32a972f0c340a9a"`);
        await queryRunner.query(`ALTER TABLE "scan_product_history" DROP CONSTRAINT "FK_a030c5ca41902eb707463b7cebb"`);
        await queryRunner.query(`ALTER TABLE "scan_product_history" DROP CONSTRAINT "FK_00463cd708c0403d179ff6a82ee"`);
        await queryRunner.query(`ALTER TABLE "scan_product_history" DROP CONSTRAINT "FK_3d0766626cecc48986ea5576728"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "scan_product_history"`);
    }

}
