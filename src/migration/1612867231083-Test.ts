import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612867231083 implements MigrationInterface {
    name = 'Test1612867231083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders_orders" ("id" SERIAL NOT NULL, "orderNumber" character varying NOT NULL, "date" character varying NOT NULL, "collectionOrderFor" character varying NOT NULL, "customerName" character varying NOT NULL, "customerEmail" character varying NOT NULL, "orderAmount" character varying NOT NULL, "paymentStatus" character varying NOT NULL, "collectionBy" character varying NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" character varying NOT NULL, "vehicleReg" character varying NOT NULL, "collectedFromId" integer, "issuedById" integer, "checkedById" integer, CONSTRAINT "PK_aa2ffef3bc088865121041c7e02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_details" ("id" SERIAL NOT NULL, "quantity" character varying NOT NULL, "productId" integer, "unitId" integer, "orderId" integer, CONSTRAINT "PK_278a6e0f21c9db1653e6f406801" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" ADD "entryGateId" integer`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" ADD "exitGateId" integer`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "branchId" integer`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" ADD CONSTRAINT "FK_5f90200738a38a2b0a61fc873af" FOREIGN KEY ("entryGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" ADD CONSTRAINT "FK_13ddb82331f5e5029e5a2a59f12" FOREIGN KEY ("exitGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_orders" ADD CONSTRAINT "FK_7f1f7adc071f0d853273ff557c1" FOREIGN KEY ("collectedFromId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_orders" ADD CONSTRAINT "FK_c3042e785e9926aced65b701f19" FOREIGN KEY ("issuedById") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_orders" ADD CONSTRAINT "FK_a880bde8bf4c6942158bfb4aaa9" FOREIGN KEY ("checkedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD CONSTRAINT "FK_c67ebaba3e5085b6401911acc70" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD CONSTRAINT "FK_5b8b822d6d90d45403690156915" FOREIGN KEY ("unitId") REFERENCES "product_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD CONSTRAINT "FK_147bc15de4304f89a93c7eee969" FOREIGN KEY ("orderId") REFERENCES "orders_orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD CONSTRAINT "FK_eb4b519c71000506a73079e4562" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visitor" DROP CONSTRAINT "FK_eb4b519c71000506a73079e4562"`);
        await queryRunner.query(`ALTER TABLE "order_details" DROP CONSTRAINT "FK_147bc15de4304f89a93c7eee969"`);
        await queryRunner.query(`ALTER TABLE "order_details" DROP CONSTRAINT "FK_5b8b822d6d90d45403690156915"`);
        await queryRunner.query(`ALTER TABLE "order_details" DROP CONSTRAINT "FK_c67ebaba3e5085b6401911acc70"`);
        await queryRunner.query(`ALTER TABLE "orders_orders" DROP CONSTRAINT "FK_a880bde8bf4c6942158bfb4aaa9"`);
        await queryRunner.query(`ALTER TABLE "orders_orders" DROP CONSTRAINT "FK_c3042e785e9926aced65b701f19"`);
        await queryRunner.query(`ALTER TABLE "orders_orders" DROP CONSTRAINT "FK_7f1f7adc071f0d853273ff557c1"`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" DROP CONSTRAINT "FK_13ddb82331f5e5029e5a2a59f12"`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" DROP CONSTRAINT "FK_5f90200738a38a2b0a61fc873af"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" DROP COLUMN "exitGateId"`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" DROP COLUMN "entryGateId"`);
        await queryRunner.query(`DROP TABLE "order_details"`);
        await queryRunner.query(`DROP TABLE "orders_orders"`);
    }

}
