import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612258235644 implements MigrationInterface {
    name = 'Test1612258235644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "headOffice" character varying NOT NULL, "email" character varying NOT NULL, "streetRoad" character varying NOT NULL, "primaryNumber" character varying NOT NULL, "secondaryNumber" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branch" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "info" character varying NOT NULL, "city" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "streetRoad" character varying NOT NULL, "isActive" boolean NOT NULL, "companyId" integer, CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_unit" ("id" SERIAL NOT NULL, "unit" character varying NOT NULL, "numberOfProducts" integer NOT NULL, "isTrackedByRFID" boolean NOT NULL, "useUnitAsDefault" boolean NOT NULL, "productId" integer, CONSTRAINT "PK_b15422982adca3bf53adfb535de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pallet" ("id" SERIAL NOT NULL, "count" integer NOT NULL, "type" character varying NOT NULL, "productId" integer, CONSTRAINT "PK_960fe7bd2b6dcb616fa59ac373b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "temporary_staff" ("id" SERIAL NOT NULL, "userName" character varying NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" integer NOT NULL, "identificationPhoto" character varying NOT NULL, "userPhoto" character varying NOT NULL, "workDescription" character varying NOT NULL, "isCarrier" boolean NOT NULL, "phone" character varying NOT NULL, "mobile" character varying NOT NULL, "email" character varying NOT NULL, "expiry" character varying NOT NULL, "lunchBreak" character varying NOT NULL, "lunchBreakStarts" character varying NOT NULL, "workHours" character varying NOT NULL, "reportingTimeMorning" character varying NOT NULL, "reportingTimeAfternoon" character varying NOT NULL, "entryGateId" integer, "exitGateId" integer, CONSTRAINT "PK_f7d292729fa398487dbf24c9f0f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitor" ("id" SERIAL NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" character varying NOT NULL, "username" character varying NOT NULL, "identificationPhoto" character varying NOT NULL, "company" character varying NOT NULL, "designation" character varying NOT NULL, "phone" character varying NOT NULL, "number" character varying NOT NULL, "email" character varying NOT NULL, "accessGatesId" integer, CONSTRAINT "PK_ba6ae421d03de90a99ed838741d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "device" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "role" character varying NOT NULL, "allowPalletsToBeCountedManually" boolean NOT NULL, "isActive" boolean NOT NULL, "hasErrors" boolean NOT NULL, "doNotAllowRemovalOfEmptyPallet" boolean NOT NULL, "verifyStoredUsingHandHeld" boolean NOT NULL, "showProductCountError" boolean NOT NULL, "doNotAllowRemoval" boolean NOT NULL, "verifyProductNotTrackedByRFID" boolean NOT NULL, "automaticallyActivateRecallProductIfRequired" boolean NOT NULL, "recordEmptyPallets" boolean NOT NULL, "dispatchingOrReceiving" boolean NOT NULL, "accessToId" integer, CONSTRAINT "PK_2dc10972aa4e27c01378dad2c72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "scan_product_history" ("id" SERIAL NOT NULL, "timeStamp" character varying NOT NULL, "isReadByHandHeld" boolean NOT NULL, CONSTRAINT "PK_0e0fe776dbecb5dedb0664e62ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gate" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "role" character varying NOT NULL, "isaActive" boolean NOT NULL, "allowManual" boolean NOT NULL, "allowEmpty" boolean NOT NULL, "verifyByHandheld" boolean NOT NULL, "verifyNotTrackedByRFID" boolean NOT NULL, "checkContinuouslyForUnauthorized" boolean NOT NULL, "doNotAllowRemoved" boolean NOT NULL, "useForDispatchOrReceiving" boolean NOT NULL, "allowDispatchForAllOrders" boolean NOT NULL, "showProductCountError" boolean NOT NULL, "allowEmptyPallets" boolean NOT NULL, "getToDetermineItemPosition" boolean NOT NULL, "verifyCarrierIsEmpty" boolean NOT NULL, "accessToId" integer, "visitorAccessId" integer, CONSTRAINT "PK_f8d4ea65058f6177925357d1311" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "presets" ("id" SERIAL NOT NULL, "presetName" character varying NOT NULL, "sectionId" integer, CONSTRAINT "PK_87dcddfb798d56670dc16403854" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_tags" ("id" SERIAL NOT NULL, "epc" character varying NOT NULL, "tid" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_e96bca3cd7a592009f2c9dc6f3e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "nameTitle" character varying NOT NULL, "description" character varying NOT NULL, "expiry" character varying NOT NULL, "date" character varying NOT NULL, "displayAs" character varying NOT NULL, "monthsLeftToExpiry" integer NOT NULL, "isPallet" boolean NOT NULL, "isTrackedByRFID" boolean NOT NULL, "category" character varying NOT NULL, "withRFIDTag" boolean NOT NULL, "currentSectionId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "manual_entry" ("id" SERIAL NOT NULL, "productId" integer, "carrierId" integer, CONSTRAINT "PK_c177a4d2bb5b5a0d44b1d2f4a27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carrier" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "status" character varying NOT NULL, "userName" character varying NOT NULL, "isFixedUse" boolean NOT NULL, CONSTRAINT "PK_f615ebd1906f0270d41b3a5a8b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "items" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "category" character varying NOT NULL, "carrierStatus" character varying NOT NULL, "status" character varying NOT NULL, "type" character varying NOT NULL, "manualEntry" boolean NOT NULL, "pallet" character varying NOT NULL, "tag" character varying NOT NULL, "quantity" integer NOT NULL, "carrierNumber" character varying NOT NULL, "expiry" character varying NOT NULL, "alertActive" integer NOT NULL, "hasRFIDTag" boolean NOT NULL, "dateTime" character varying NOT NULL, "hasErrors" boolean NOT NULL, "fromId" integer, "destinationId" integer, "carrierId" integer, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bays" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "role" character varying NOT NULL, "isActive" boolean NOT NULL, "sectionsId" integer, CONSTRAINT "PK_884565da9a418b01d1a2ef7306d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sections" ("id" SERIAL NOT NULL, "role" character varying NOT NULL, "name" character varying NOT NULL, "capacity" integer NOT NULL, "hasErrors" boolean NOT NULL, "branchId" integer, CONSTRAINT "PK_f9749dd3bffd880a497d007e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "alerts" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "severity" character varying NOT NULL, "sectionsId" integer, "gateId" integer, "deviceId" integer, CONSTRAINT "PK_60f895662df096bfcdfab7f4b96" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "device_role" ("id" SERIAL NOT NULL, "deviceType" character varying NOT NULL, "serialNumber" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_bcfdea1c8c3a6352066606cd231" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dispatch_times" ("id" SERIAL NOT NULL, "monday" boolean NOT NULL, "tuesday" boolean NOT NULL, "wednesday" boolean NOT NULL, "thursday" boolean NOT NULL, "friday" boolean NOT NULL, "saturday" boolean NOT NULL, "sunday" boolean NOT NULL, "startTime" character varying NOT NULL, "endTime" character varying NOT NULL, CONSTRAINT "PK_a6dbf00a19e93570f6aa2ce88e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "general_item" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "date" character varying NOT NULL, "expiry" character varying NOT NULL, CONSTRAINT "PK_84fbabe1ea6b54178b29b0b8248" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "packaging_section" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_2904191876b14603ccb991525f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "scanners" ("id" SERIAL NOT NULL, "deviceType" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_f4804ec12667d305ac04219ca4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "storage_bay" ("id" SERIAL NOT NULL, "bayCode" character varying NOT NULL, "map" character varying NOT NULL, "storageType" character varying NOT NULL, "isActive" boolean NOT NULL, "hasErrors" boolean NOT NULL, CONSTRAINT "PK_0fc0313948728c6bcf05c9e0694" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "userName" character varying NOT NULL, "password" character varying NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" integer NOT NULL, "identificationPhoto" character varying NOT NULL, "designation" character varying NOT NULL, "isCarrier" boolean NOT NULL, "departmentWorkArea" character varying NOT NULL, "phone" integer NOT NULL, "mobile" integer NOT NULL, "email" character varying NOT NULL, "joined" character varying NOT NULL, "isAdmin" boolean NOT NULL, "canAddUsers" boolean NOT NULL, "canViewOrderAmount" boolean NOT NULL, "issueEditCollectionReplacementOrder" boolean NOT NULL, "viewCollectionHistory" boolean NOT NULL, "loadCollectionOrder" boolean NOT NULL, "setGateDeviceSettings" boolean NOT NULL, "setProductsAndTags" boolean NOT NULL, "setCarrierSettings" boolean NOT NULL, "setStorageBays" boolean NOT NULL, "setOrderQueSettings" boolean NOT NULL, "setAccessSettings" boolean NOT NULL, "setAccessCard" boolean NOT NULL, "receivePackagingAndStagingAlerts" boolean NOT NULL, "orderDispatchAlerts" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "alerts_for_products_product" ("alertsId" integer NOT NULL, "productId" integer NOT NULL, CONSTRAINT "PK_2d77a3027fa15ab5563d603b33d" PRIMARY KEY ("alertsId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_80108c9c8129479cafda52d3d9" ON "alerts_for_products_product" ("alertsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a04c00060a96b65a6d3fcc21be" ON "alerts_for_products_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "branch" ADD CONSTRAINT "FK_d916e8de3e93fdf6bd13c734237" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_unit" ADD CONSTRAINT "FK_fdaa18f9ede4b96e4deaa98a4d3" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pallet" ADD CONSTRAINT "FK_d3e8577c20f93ea348cce7b8c94" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "temporary_staff" ADD CONSTRAINT "FK_243953d39bfdb940f2447680a94" FOREIGN KEY ("entryGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "temporary_staff" ADD CONSTRAINT "FK_0d9ec525566f7f192575191d1b4" FOREIGN KEY ("exitGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD CONSTRAINT "FK_e02f95b5cac9ec60387215dbf2a" FOREIGN KEY ("accessGatesId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_8dfadc67a7ade663ee3a8859dcb" FOREIGN KEY ("accessToId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_66232231dc0c2613ab076c5ea65" FOREIGN KEY ("accessToId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_e3e034e67f7d2cfaac0c30b15c2" FOREIGN KEY ("visitorAccessId") REFERENCES "visitor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "presets" ADD CONSTRAINT "FK_5a5997986f331a95d545e5089c8" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_56606ad077291e37af569423412" FOREIGN KEY ("currentSectionId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "manual_entry" ADD CONSTRAINT "FK_f650abce59ce39b05385fec794e" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "manual_entry" ADD CONSTRAINT "FK_deea2294ecc07f028b22c642449" FOREIGN KEY ("carrierId") REFERENCES "carrier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_1131dbba0dfa97304bc4ca07818" FOREIGN KEY ("fromId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_cb1ddc1929c66453d19ad51ad27" FOREIGN KEY ("destinationId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_48db544a48521661a7259178296" FOREIGN KEY ("carrierId") REFERENCES "carrier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bays" ADD CONSTRAINT "FK_78f00834699a17e6323bd2b9b78" FOREIGN KEY ("sectionsId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sections" ADD CONSTRAINT "FK_8d5752925f83773ee6a0dc6b49b" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_883f029045a01666a83c9fed4a4" FOREIGN KEY ("sectionsId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_7567cac5e4386fff4f6ed8fc667" FOREIGN KEY ("gateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_2b3651f3fd95470304fabc1f02a" FOREIGN KEY ("deviceId") REFERENCES "device"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts_for_products_product" ADD CONSTRAINT "FK_80108c9c8129479cafda52d3d92" FOREIGN KEY ("alertsId") REFERENCES "alerts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts_for_products_product" ADD CONSTRAINT "FK_a04c00060a96b65a6d3fcc21bed" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alerts_for_products_product" DROP CONSTRAINT "FK_a04c00060a96b65a6d3fcc21bed"`);
        await queryRunner.query(`ALTER TABLE "alerts_for_products_product" DROP CONSTRAINT "FK_80108c9c8129479cafda52d3d92"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_2b3651f3fd95470304fabc1f02a"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_7567cac5e4386fff4f6ed8fc667"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_883f029045a01666a83c9fed4a4"`);
        await queryRunner.query(`ALTER TABLE "sections" DROP CONSTRAINT "FK_8d5752925f83773ee6a0dc6b49b"`);
        await queryRunner.query(`ALTER TABLE "bays" DROP CONSTRAINT "FK_78f00834699a17e6323bd2b9b78"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_48db544a48521661a7259178296"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_cb1ddc1929c66453d19ad51ad27"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_1131dbba0dfa97304bc4ca07818"`);
        await queryRunner.query(`ALTER TABLE "manual_entry" DROP CONSTRAINT "FK_deea2294ecc07f028b22c642449"`);
        await queryRunner.query(`ALTER TABLE "manual_entry" DROP CONSTRAINT "FK_f650abce59ce39b05385fec794e"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_56606ad077291e37af569423412"`);
        await queryRunner.query(`ALTER TABLE "presets" DROP CONSTRAINT "FK_5a5997986f331a95d545e5089c8"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_e3e034e67f7d2cfaac0c30b15c2"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_66232231dc0c2613ab076c5ea65"`);
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_8dfadc67a7ade663ee3a8859dcb"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP CONSTRAINT "FK_e02f95b5cac9ec60387215dbf2a"`);
        await queryRunner.query(`ALTER TABLE "temporary_staff" DROP CONSTRAINT "FK_0d9ec525566f7f192575191d1b4"`);
        await queryRunner.query(`ALTER TABLE "temporary_staff" DROP CONSTRAINT "FK_243953d39bfdb940f2447680a94"`);
        await queryRunner.query(`ALTER TABLE "pallet" DROP CONSTRAINT "FK_d3e8577c20f93ea348cce7b8c94"`);
        await queryRunner.query(`ALTER TABLE "product_unit" DROP CONSTRAINT "FK_fdaa18f9ede4b96e4deaa98a4d3"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP CONSTRAINT "FK_d916e8de3e93fdf6bd13c734237"`);
        await queryRunner.query(`DROP INDEX "IDX_a04c00060a96b65a6d3fcc21be"`);
        await queryRunner.query(`DROP INDEX "IDX_80108c9c8129479cafda52d3d9"`);
        await queryRunner.query(`DROP TABLE "alerts_for_products_product"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "storage_bay"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "scanners"`);
        await queryRunner.query(`DROP TABLE "packaging_section"`);
        await queryRunner.query(`DROP TABLE "general_item"`);
        await queryRunner.query(`DROP TABLE "dispatch_times"`);
        await queryRunner.query(`DROP TABLE "device_role"`);
        await queryRunner.query(`DROP TABLE "alerts"`);
        await queryRunner.query(`DROP TABLE "sections"`);
        await queryRunner.query(`DROP TABLE "bays"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "carrier"`);
        await queryRunner.query(`DROP TABLE "manual_entry"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "product_tags"`);
        await queryRunner.query(`DROP TABLE "presets"`);
        await queryRunner.query(`DROP TABLE "gate"`);
        await queryRunner.query(`DROP TABLE "scan_product_history"`);
        await queryRunner.query(`DROP TABLE "device"`);
        await queryRunner.query(`DROP TABLE "visitor"`);
        await queryRunner.query(`DROP TABLE "temporary_staff"`);
        await queryRunner.query(`DROP TABLE "pallet"`);
        await queryRunner.query(`DROP TABLE "product_unit"`);
        await queryRunner.query(`DROP TABLE "branch"`);
        await queryRunner.query(`DROP TABLE "company"`);
    }

}
