import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612090466429 implements MigrationInterface {
    name = 'Test1612090466429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "alerts" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "sectionsId" integer, CONSTRAINT "PK_60f895662df096bfcdfab7f4b96" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carrier" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "status" character varying NOT NULL, "userName" character varying NOT NULL, "isFixedUse" boolean NOT NULL, CONSTRAINT "PK_f615ebd1906f0270d41b3a5a8b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "items" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "category" character varying NOT NULL, "carrierStatus" character varying NOT NULL, "status" character varying NOT NULL, "type" character varying NOT NULL, "manualEntry" boolean NOT NULL, "pallet" character varying NOT NULL, "tag" character varying NOT NULL, "quantity" integer NOT NULL, "carrierNumber" character varying NOT NULL, "expiry" character varying NOT NULL, "alertActive" integer NOT NULL, "hasRFIDTag" boolean NOT NULL, "dateTime" character varying NOT NULL, "hasErrors" boolean NOT NULL, "fromId" integer, "destinationId" integer, "carrierId" integer, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "temporary_staff" ("id" SERIAL NOT NULL, "userName" character varying NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" integer NOT NULL, "identificationPhoto" character varying NOT NULL, "userPhoto" character varying NOT NULL, "workDescription" character varying NOT NULL, "isCarrier" boolean NOT NULL, "phone" character varying NOT NULL, "mobile" character varying NOT NULL, "email" character varying NOT NULL, "expiry" character varying NOT NULL, "lunchBreak" character varying NOT NULL, "lunchBreakStarts" character varying NOT NULL, "workHours" character varying NOT NULL, "reportingTimeMorning" character varying NOT NULL, "reportingTimeAfternoon" character varying NOT NULL, "entryGateId" integer, "exitGateId" integer, CONSTRAINT "PK_f7d292729fa398487dbf24c9f0f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitor" ("id" SERIAL NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" character varying NOT NULL, "username" character varying NOT NULL, "identificationPhoto" character varying NOT NULL, "company" character varying NOT NULL, "designation" character varying NOT NULL, "phone" character varying NOT NULL, "number" character varying NOT NULL, "email" character varying NOT NULL, "accessGatesId" integer, CONSTRAINT "PK_ba6ae421d03de90a99ed838741d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_unit" ("id" SERIAL NOT NULL, "unit" character varying NOT NULL, "numberOfProducts" integer NOT NULL, "isTrackedByRFID" boolean NOT NULL, "useUnitAsDefault" boolean NOT NULL, "productId" integer, CONSTRAINT "PK_b15422982adca3bf53adfb535de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pallet" ("id" SERIAL NOT NULL, "count" integer NOT NULL, "type" character varying NOT NULL, "productId" integer, CONSTRAINT "PK_960fe7bd2b6dcb616fa59ac373b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "nameTitle" character varying NOT NULL, "description" character varying NOT NULL, "expiry" character varying NOT NULL, "displayAs" character varying NOT NULL, "monthsLeftToExpiry" integer NOT NULL, "isPallet" boolean NOT NULL, "isTrackedByRFID" boolean NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gate" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "role" character varying NOT NULL, "isaActive" boolean NOT NULL, "allowManual" boolean NOT NULL, "allowEmpty" boolean NOT NULL, "verifyByHandheld" boolean NOT NULL, "verifyNotTrackedByRFID" boolean NOT NULL, "checkContinuouslyForUnauthorized" boolean NOT NULL, "doNotAllowRemoved" boolean NOT NULL, "useForDispatchOrReceiving" boolean NOT NULL, "allowDispatchForAllOrders" boolean NOT NULL, "showProductCountError" boolean NOT NULL, "allowEmptyPallets" boolean NOT NULL, "getToDetermineItemPosition" boolean NOT NULL, "verifyCarrierIsEmpty" boolean NOT NULL, "accessToId" integer, "visitorAccessId" integer, CONSTRAINT "PK_f8d4ea65058f6177925357d1311" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "unit_area" ("id" SERIAL NOT NULL, "role" character varying NOT NULL, "name" character varying NOT NULL, "capacity" integer NOT NULL, "branchId" integer, CONSTRAINT "PK_c9e695277c133f20a1184b4a281" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "headOffice" character varying NOT NULL, "email" character varying NOT NULL, "streetRoad" character varying NOT NULL, "primaryNumber" character varying NOT NULL, "secondaryNumber" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "__branch" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "location" character varying NOT NULL, "city" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "streetRoad" character varying NOT NULL, "companyId" integer, CONSTRAINT "PK_618eaf15e8f85d7df8936723f9f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "storage_bay" ("id" SERIAL NOT NULL, "bayCode" character varying NOT NULL, "map" character varying NOT NULL, "storageType" character varying NOT NULL, CONSTRAINT "PK_0fc0313948728c6bcf05c9e0694" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bays" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "role" character varying NOT NULL, "storageId" integer, CONSTRAINT "PK_884565da9a418b01d1a2ef7306d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "device" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "role" character varying NOT NULL, "allowPalletsToBeCountedManually" boolean NOT NULL, "doNotAllowRemovalOfEmptyPallet" boolean NOT NULL, "verifyStoredUsingHandHeld" boolean NOT NULL, "showProductCountError" boolean NOT NULL, "doNotAllowRemoval" boolean NOT NULL, "verifyProductNotTrackedByRFID" boolean NOT NULL, "automaticallyActivateRecallProductIfRequired" boolean NOT NULL, "recordEmptyPallets" boolean NOT NULL, "dispatchingOrReceiving" boolean NOT NULL, CONSTRAINT "PK_2dc10972aa4e27c01378dad2c72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "device_role" ("id" SERIAL NOT NULL, "deviceType" character varying NOT NULL, "serialNumber" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_bcfdea1c8c3a6352066606cd231" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dispatch_times" ("id" SERIAL NOT NULL, "monday" boolean NOT NULL, "tuesday" boolean NOT NULL, "wednesday" boolean NOT NULL, "thursday" boolean NOT NULL, "friday" boolean NOT NULL, "saturday" boolean NOT NULL, "sunday" boolean NOT NULL, "startTime" character varying NOT NULL, "endTime" character varying NOT NULL, CONSTRAINT "PK_a6dbf00a19e93570f6aa2ce88e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "general_item" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "date" character varying NOT NULL, "expiry" character varying NOT NULL, CONSTRAINT "PK_84fbabe1ea6b54178b29b0b8248" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "packaging_section" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_2904191876b14603ccb991525f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "scanners" ("id" SERIAL NOT NULL, "deviceType" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_f4804ec12667d305ac04219ca4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "userName" character varying NOT NULL, "password" character varying NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" integer NOT NULL, "identificationPhoto" character varying NOT NULL, "designation" character varying NOT NULL, "isCarrier" boolean NOT NULL, "departmentWorkArea" character varying NOT NULL, "phone" integer NOT NULL, "mobile" integer NOT NULL, "email" character varying NOT NULL, "joined" character varying NOT NULL, "isAdmin" boolean NOT NULL, "canAddUsers" boolean NOT NULL, "canViewOrderAmount" boolean NOT NULL, "issueEditCollectionReplacementOrder" boolean NOT NULL, "viewCollectionHistory" boolean NOT NULL, "loadCollectionOrder" boolean NOT NULL, "setGateDeviceSettings" boolean NOT NULL, "setProductsAndTags" boolean NOT NULL, "setCarrierSettings" boolean NOT NULL, "setStorageBays" boolean NOT NULL, "setOrderQueSettings" boolean NOT NULL, "setAccessSettings" boolean NOT NULL, "setAccessCard" boolean NOT NULL, "receivePackagingAndStagingAlerts" boolean NOT NULL, "orderDispatchAlerts" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_883f029045a01666a83c9fed4a4" FOREIGN KEY ("sectionsId") REFERENCES "unit_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_1131dbba0dfa97304bc4ca07818" FOREIGN KEY ("fromId") REFERENCES "unit_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_cb1ddc1929c66453d19ad51ad27" FOREIGN KEY ("destinationId") REFERENCES "unit_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_48db544a48521661a7259178296" FOREIGN KEY ("carrierId") REFERENCES "carrier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "temporary_staff" ADD CONSTRAINT "FK_243953d39bfdb940f2447680a94" FOREIGN KEY ("entryGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "temporary_staff" ADD CONSTRAINT "FK_0d9ec525566f7f192575191d1b4" FOREIGN KEY ("exitGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD CONSTRAINT "FK_e02f95b5cac9ec60387215dbf2a" FOREIGN KEY ("accessGatesId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_unit" ADD CONSTRAINT "FK_fdaa18f9ede4b96e4deaa98a4d3" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pallet" ADD CONSTRAINT "FK_d3e8577c20f93ea348cce7b8c94" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_66232231dc0c2613ab076c5ea65" FOREIGN KEY ("accessToId") REFERENCES "unit_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_e3e034e67f7d2cfaac0c30b15c2" FOREIGN KEY ("visitorAccessId") REFERENCES "visitor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "unit_area" ADD CONSTRAINT "FK_26f44fcde63ae78f98eba7f8a9d" FOREIGN KEY ("branchId") REFERENCES "__branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "__branch" ADD CONSTRAINT "FK_5ea6b3e3119f987fb649684d007" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bays" ADD CONSTRAINT "FK_996a3f81668bae961c13e24bff8" FOREIGN KEY ("storageId") REFERENCES "storage_bay"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bays" DROP CONSTRAINT "FK_996a3f81668bae961c13e24bff8"`);
        await queryRunner.query(`ALTER TABLE "__branch" DROP CONSTRAINT "FK_5ea6b3e3119f987fb649684d007"`);
        await queryRunner.query(`ALTER TABLE "unit_area" DROP CONSTRAINT "FK_26f44fcde63ae78f98eba7f8a9d"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_e3e034e67f7d2cfaac0c30b15c2"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_66232231dc0c2613ab076c5ea65"`);
        await queryRunner.query(`ALTER TABLE "pallet" DROP CONSTRAINT "FK_d3e8577c20f93ea348cce7b8c94"`);
        await queryRunner.query(`ALTER TABLE "product_unit" DROP CONSTRAINT "FK_fdaa18f9ede4b96e4deaa98a4d3"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP CONSTRAINT "FK_e02f95b5cac9ec60387215dbf2a"`);
        await queryRunner.query(`ALTER TABLE "temporary_staff" DROP CONSTRAINT "FK_0d9ec525566f7f192575191d1b4"`);
        await queryRunner.query(`ALTER TABLE "temporary_staff" DROP CONSTRAINT "FK_243953d39bfdb940f2447680a94"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_48db544a48521661a7259178296"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_cb1ddc1929c66453d19ad51ad27"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_1131dbba0dfa97304bc4ca07818"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_883f029045a01666a83c9fed4a4"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "scanners"`);
        await queryRunner.query(`DROP TABLE "packaging_section"`);
        await queryRunner.query(`DROP TABLE "general_item"`);
        await queryRunner.query(`DROP TABLE "dispatch_times"`);
        await queryRunner.query(`DROP TABLE "device_role"`);
        await queryRunner.query(`DROP TABLE "device"`);
        await queryRunner.query(`DROP TABLE "bays"`);
        await queryRunner.query(`DROP TABLE "storage_bay"`);
        await queryRunner.query(`DROP TABLE "__branch"`);
        await queryRunner.query(`DROP TABLE "company"`);
        await queryRunner.query(`DROP TABLE "unit_area"`);
        await queryRunner.query(`DROP TABLE "gate"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "pallet"`);
        await queryRunner.query(`DROP TABLE "product_unit"`);
        await queryRunner.query(`DROP TABLE "visitor"`);
        await queryRunner.query(`DROP TABLE "temporary_staff"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "carrier"`);
        await queryRunner.query(`DROP TABLE "alerts"`);
    }

}
