import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612878174800 implements MigrationInterface {
    name = 'Test1612878174800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_staff" ("id" SERIAL NOT NULL, "userName" character varying NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" integer NOT NULL, "identificationPhoto" character varying NOT NULL, "userPhoto" character varying NOT NULL, "workDescription" character varying NOT NULL, "isCarrier" boolean NOT NULL, "phone" character varying NOT NULL, "mobile" character varying NOT NULL, "email" character varying NOT NULL, "expiry" character varying NOT NULL, "lunchBreak" character varying NOT NULL, "lunchBreakStarts" character varying NOT NULL, "workHours" character varying NOT NULL, "reportingTimeMorning" character varying NOT NULL, "reportingTimeAfternoon" character varying NOT NULL, "entryGateId" integer, "exitGateId" integer, CONSTRAINT "PK_f7d292729fa398487dbf24c9f0f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitor_access_tags" ("id" SERIAL NOT NULL, "tagType" character varying NOT NULL, "userName" character varying NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" character varying NOT NULL, "identificationImage" character varying NOT NULL, "visitorsCompany" character varying NOT NULL, "designation" character varying NOT NULL, "phone" character varying NOT NULL, "mobile" character varying NOT NULL, "email" character varying NOT NULL, "expiry" character varying NOT NULL, "entryGateId" integer, "exitGateId" integer, "branchId" integer, CONSTRAINT "PK_028c21d35c0cf30190930272a48" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_privileges" ("id" SERIAL NOT NULL, "isAdmin" boolean NOT NULL, "addOrEditUsers" boolean NOT NULL, "canViewOrderAmount" boolean NOT NULL, "issueEditCollectionReplacementOrder" boolean NOT NULL, "loadCollectionOrder" boolean NOT NULL, "loadPartialProductQuantity" boolean NOT NULL, "setGateDeviceSettings" boolean NOT NULL, "setProductTags" boolean NOT NULL, "setCarrierSettings" boolean NOT NULL, "setStorageBays" boolean NOT NULL, "setOrderQueSettings" boolean NOT NULL, "setAccessSettings" boolean NOT NULL, "scanAccessCard" boolean NOT NULL, "packagingAndStorageAlerts" boolean NOT NULL, "orderDispatchAlerts" boolean NOT NULL, CONSTRAINT "PK_4429e115dd3db86b6cf1f044ea5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "manual_entry" ("id" SERIAL NOT NULL, "productId" integer, "carrierId" integer, CONSTRAINT "PK_c177a4d2bb5b5a0d44b1d2f4a27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carrier_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "branchId" integer, CONSTRAINT "PK_39d212a18e659e8e88098c598ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carrier" ("id" SERIAL NOT NULL, "No" integer NOT NULL, "status" character varying NOT NULL, "isFixedUse" boolean NOT NULL, "userId" integer, "typeId" integer, CONSTRAINT "REL_62f0d204c7ecad7d89f03c1b87" UNIQUE ("userId"), CONSTRAINT "PK_f615ebd1906f0270d41b3a5a8b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "packing_tags" ("id" SERIAL NOT NULL, "parkingName" character varying NOT NULL, "vehicleReg" character varying NOT NULL, "expiry" character varying NOT NULL, "driverId" integer, CONSTRAINT "REL_75cfe36a2d635df1f5d8260e53" UNIQUE ("driverId"), CONSTRAINT "PK_db44fc07210fb99b2263ccb6f0f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "userPicture" character varying NOT NULL, "userName" character varying NOT NULL, "password" character varying NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" character varying NOT NULL, "identificationPhoto" character varying NOT NULL, "designation" character varying NOT NULL, "isCarrier" boolean NOT NULL, "departmentWorkArea" character varying NOT NULL, "phone" character varying NOT NULL, "mobile" character varying NOT NULL, "email" character varying NOT NULL, "joined" character varying NOT NULL, "branchId" integer, "privilegesId" integer, CONSTRAINT "REL_d7bf253fa56bf4e8f0fcb0ec3d" UNIQUE ("privilegesId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders_orders" ("id" SERIAL NOT NULL, "orderNumber" character varying NOT NULL, "date" character varying NOT NULL, "collectionOrderFor" character varying NOT NULL, "customerName" character varying NOT NULL, "customerEmail" character varying NOT NULL, "orderAmount" character varying NOT NULL, "paymentStatus" character varying NOT NULL, "collectionBy" character varying NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" character varying NOT NULL, "vehicleReg" character varying NOT NULL, "collectedFromId" integer, "issuedById" integer, "checkedById" integer, CONSTRAINT "PK_aa2ffef3bc088865121041c7e02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_details" ("id" SERIAL NOT NULL, "quantity" character varying NOT NULL, "productId" integer, "unitId" integer, "orderId" integer, CONSTRAINT "PK_278a6e0f21c9db1653e6f406801" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_unit" ("id" SERIAL NOT NULL, "unit" character varying NOT NULL, "numberOfProducts" integer NOT NULL, "isTrackedByRFID" boolean NOT NULL, "useUnitAsDefault" boolean NOT NULL, CONSTRAINT "PK_b15422982adca3bf53adfb535de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pallet" ("id" SERIAL NOT NULL, "count" integer NOT NULL, "type" character varying NOT NULL, "productId" integer, CONSTRAINT "PK_960fe7bd2b6dcb616fa59ac373b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "store" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "map" character varying NOT NULL, "storageType" character varying NOT NULL, "isActive" boolean NOT NULL, "hasErrors" boolean NOT NULL, "branchId" integer, CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bays" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "role" character varying NOT NULL, "hasErrors" boolean NOT NULL, "isActive" boolean NOT NULL, "storageType" character varying NOT NULL, "storeId" integer, CONSTRAINT "PK_884565da9a418b01d1a2ef7306d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "device" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "role" character varying NOT NULL, "allowPalletsToBeCountedManually" boolean NOT NULL, "isActive" boolean NOT NULL, "hasErrors" boolean NOT NULL, "doNotAllowRemovalOfEmptyPallet" boolean NOT NULL, "verifyStoredUsingHandHeld" boolean NOT NULL, "showProductCountError" boolean NOT NULL, "doNotAllowRemoval" boolean NOT NULL, "verifyProductNotTrackedByRFID" boolean NOT NULL, "automaticallyActivateRecallProductIfRequired" boolean NOT NULL, "recordEmptyPallets" boolean NOT NULL, "dispatchingOrReceiving" boolean NOT NULL, "sectionsId" integer, "baysId" integer, "branchId" integer, CONSTRAINT "PK_2dc10972aa4e27c01378dad2c72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "scan_product_history" ("id" SERIAL NOT NULL, "timeStamp" character varying NOT NULL, "isReadByHandHeld" boolean NOT NULL, CONSTRAINT "PK_0e0fe776dbecb5dedb0664e62ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "presets" ("id" SERIAL NOT NULL, "presetName" character varying NOT NULL, "sectionId" integer, CONSTRAINT "REL_5a5997986f331a95d545e5089c" UNIQUE ("sectionId"), CONSTRAINT "PK_87dcddfb798d56670dc16403854" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_tags" ("id" SERIAL NOT NULL, "epc" character varying NOT NULL, "tid" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_e96bca3cd7a592009f2c9dc6f3e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "status" character varying NOT NULL, "expiry" character varying NOT NULL, "monthsLeftToExpire" character varying NOT NULL, "hasErrors" boolean NOT NULL, "isStoredOnPallet" boolean NOT NULL, "palletIsTrackedByRFID" boolean NOT NULL, "unitId" integer, "dispatchGateId" integer, "tagId" integer, "presetId" integer, "currentSectionId" integer, "storedInId" integer, CONSTRAINT "REL_07f1a140113cfa11902ad4c6d3" UNIQUE ("tagId"), CONSTRAINT "REL_3b3d84f3b8890b8afa409ffe01" UNIQUE ("presetId"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gate" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "readerAddress" character varying NOT NULL, "numberOfAnts" character varying NOT NULL, "antToDetectOutgoing" integer NOT NULL, "antToDetectIncoming" integer NOT NULL, "ant1" boolean NOT NULL, "ant2" boolean NOT NULL, "ant3" boolean NOT NULL, "ant4" boolean NOT NULL, "ant1Power" character varying NOT NULL, "ant2Power" character varying NOT NULL, "ant3Power" character varying NOT NULL, "ant4Power" character varying NOT NULL, "role" character varying NOT NULL, "hasErrors" boolean, "isaActive" boolean, "allowManual" boolean, "allowEmpty" boolean, "verifyByHandheld" boolean, "verifyNotTrackedByRFID" boolean, "checkContinuouslyForUnauthorized" boolean, "doNotAllowRemoved" boolean, "useForDispatchOrReceiving" boolean, "allowDispatchForAllOrders" boolean, "showProductCountError" boolean, "allowEmptyPallets" boolean, "getToDetermineItemPosition" boolean, "verifyCarrierIsEmpty" boolean, "parkingAccessId" integer, "branchId" integer, "visitorsId" integer, CONSTRAINT "PK_f8d4ea65058f6177925357d1311" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "alerts" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "severity" character varying NOT NULL, "sectionsId" integer, "gateId" integer, "deviceId" integer, CONSTRAINT "PK_60f895662df096bfcdfab7f4b96" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sections" ("id" SERIAL NOT NULL, "role" character varying NOT NULL, "name" character varying NOT NULL, "capacity" integer NOT NULL, "hasErrors" boolean NOT NULL, "branchId" integer, CONSTRAINT "PK_f9749dd3bffd880a497d007e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "headOffice" character varying NOT NULL, "email" character varying NOT NULL, "streetRoad" character varying NOT NULL, "primaryNumber" character varying NOT NULL, "secondaryNumber" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dispatch_times" ("id" SERIAL NOT NULL, "monday" boolean NOT NULL, "tuesday" boolean NOT NULL, "wednesday" boolean NOT NULL, "thursday" boolean NOT NULL, "friday" boolean NOT NULL, "saturday" boolean NOT NULL, "sunday" boolean NOT NULL, "startTime" character varying NOT NULL, "endTime" character varying NOT NULL, "saturdayStart" character varying NOT NULL, "saturdayEnd" character varying NOT NULL, "sundayStart" character varying NOT NULL, "sundayEnd" character varying NOT NULL, "branchId" integer, CONSTRAINT "REL_b6343e7b89f7c6f44a59afe0c1" UNIQUE ("branchId"), CONSTRAINT "PK_a6dbf00a19e93570f6aa2ce88e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_que" ("id" SERIAL NOT NULL, "vehicleCanEnterPremisesWhenRemaining" integer NOT NULL, "vehicleWillBePreparedAndRemainOnStandBy" integer NOT NULL, "branchId" integer, CONSTRAINT "REL_275f683e509344ad3b87de1936" UNIQUE ("branchId"), CONSTRAINT "PK_57689510cb8488f95d5a702ecc4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branch" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "info" character varying NOT NULL, "city" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "streetRoad" character varying NOT NULL, "isActive" boolean NOT NULL, "companyId" integer, CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitor" ("id" SERIAL NOT NULL, "tagType" character varying NOT NULL, "userName" character varying NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" character varying NOT NULL, "uploadIdentification" character varying NOT NULL, "userImage" character varying NOT NULL, "workDesc" character varying NOT NULL, "branchId" integer, CONSTRAINT "PK_ba6ae421d03de90a99ed838741d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reader" ("id" SERIAL NOT NULL, "address" character varying NOT NULL, "numberOfAnts" integer NOT NULL, "outGoingAnt" character varying NOT NULL, "incomingAnt" character varying NOT NULL, "ant1Power" character varying NOT NULL, "ant2Power" character varying NOT NULL, "ant3Power" character varying NOT NULL, "ant4Power" character varying NOT NULL, CONSTRAINT "PK_6f40e8c75b734b9073be81a4564" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bays_product_product" ("baysId" integer NOT NULL, "productId" integer NOT NULL, CONSTRAINT "PK_9c320d636f7840089b9dd0aadb9" PRIMARY KEY ("baysId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_033a5dcc33322d961ca0a03001" ON "bays_product_product" ("baysId") `);
        await queryRunner.query(`CREATE INDEX "IDX_52ac5d22338a674bf5b89edf1b" ON "bays_product_product" ("productId") `);
        await queryRunner.query(`CREATE TABLE "gate_visitor_access_visitor_access_tags" ("gateId" integer NOT NULL, "visitorAccessTagsId" integer NOT NULL, CONSTRAINT "PK_6ee54a6c5a6277b957e3fadbfc3" PRIMARY KEY ("gateId", "visitorAccessTagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d67636362bfed386f1ad937d3d" ON "gate_visitor_access_visitor_access_tags" ("gateId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f2bd66cdc02ee09492bc93579d" ON "gate_visitor_access_visitor_access_tags" ("visitorAccessTagsId") `);
        await queryRunner.query(`CREATE TABLE "gate_bays_bays" ("gateId" integer NOT NULL, "baysId" integer NOT NULL, CONSTRAINT "PK_e532fc770e71842f2140c71be17" PRIMARY KEY ("gateId", "baysId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_05617b1d107cf194bdeeaf60b6" ON "gate_bays_bays" ("gateId") `);
        await queryRunner.query(`CREATE INDEX "IDX_87c177a044b62147bd7b3b8ea8" ON "gate_bays_bays" ("baysId") `);
        await queryRunner.query(`ALTER TABLE "temporary_staff" ADD CONSTRAINT "FK_243953d39bfdb940f2447680a94" FOREIGN KEY ("entryGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "temporary_staff" ADD CONSTRAINT "FK_0d9ec525566f7f192575191d1b4" FOREIGN KEY ("exitGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" ADD CONSTRAINT "FK_5f90200738a38a2b0a61fc873af" FOREIGN KEY ("entryGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" ADD CONSTRAINT "FK_13ddb82331f5e5029e5a2a59f12" FOREIGN KEY ("exitGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" ADD CONSTRAINT "FK_156390a57ce9ef2d5a9fcbba427" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "manual_entry" ADD CONSTRAINT "FK_f650abce59ce39b05385fec794e" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "manual_entry" ADD CONSTRAINT "FK_deea2294ecc07f028b22c642449" FOREIGN KEY ("carrierId") REFERENCES "carrier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carrier_type" ADD CONSTRAINT "FK_0fef059578cdd03aeb5a051e486" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carrier" ADD CONSTRAINT "FK_62f0d204c7ecad7d89f03c1b876" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carrier" ADD CONSTRAINT "FK_85d59f7eb903b022f5a045f1509" FOREIGN KEY ("typeId") REFERENCES "carrier_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "packing_tags" ADD CONSTRAINT "FK_75cfe36a2d635df1f5d8260e53d" FOREIGN KEY ("driverId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_246426dfd001466a1d5e47322f4" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d7bf253fa56bf4e8f0fcb0ec3df" FOREIGN KEY ("privilegesId") REFERENCES "user_privileges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_orders" ADD CONSTRAINT "FK_7f1f7adc071f0d853273ff557c1" FOREIGN KEY ("collectedFromId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_orders" ADD CONSTRAINT "FK_c3042e785e9926aced65b701f19" FOREIGN KEY ("issuedById") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_orders" ADD CONSTRAINT "FK_a880bde8bf4c6942158bfb4aaa9" FOREIGN KEY ("checkedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD CONSTRAINT "FK_c67ebaba3e5085b6401911acc70" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD CONSTRAINT "FK_5b8b822d6d90d45403690156915" FOREIGN KEY ("unitId") REFERENCES "product_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD CONSTRAINT "FK_147bc15de4304f89a93c7eee969" FOREIGN KEY ("orderId") REFERENCES "orders_orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pallet" ADD CONSTRAINT "FK_d3e8577c20f93ea348cce7b8c94" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_6f202a405e2209d741f8ec7e554" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bays" ADD CONSTRAINT "FK_c3ef2a3d3dcdf7602751e6e47f2" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_41874d2ecb7400a606b090f5e88" FOREIGN KEY ("sectionsId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_44ed2374e3b14318d8fde9658d6" FOREIGN KEY ("baysId") REFERENCES "bays"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_cae70c648a6b56d55b38db00013" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "presets" ADD CONSTRAINT "FK_5a5997986f331a95d545e5089c8" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_2ee96d5eff55f14a6e37470b782" FOREIGN KEY ("unitId") REFERENCES "product_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_742c92af4b5861bc19d976d2b2e" FOREIGN KEY ("dispatchGateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_07f1a140113cfa11902ad4c6d35" FOREIGN KEY ("tagId") REFERENCES "product_tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_3b3d84f3b8890b8afa409ffe015" FOREIGN KEY ("presetId") REFERENCES "presets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_56606ad077291e37af569423412" FOREIGN KEY ("currentSectionId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_bb788bfc4cc86b0ae31bf56f168" FOREIGN KEY ("storedInId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_00c743b0023315c7bef605cc40e" FOREIGN KEY ("parkingAccessId") REFERENCES "packing_tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_452848a83f567d0289c865ddfff" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_27aabffb6c4bc1e5a88c5e82137" FOREIGN KEY ("visitorsId") REFERENCES "visitor_access_tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_883f029045a01666a83c9fed4a4" FOREIGN KEY ("sectionsId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_7567cac5e4386fff4f6ed8fc667" FOREIGN KEY ("gateId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_2b3651f3fd95470304fabc1f02a" FOREIGN KEY ("deviceId") REFERENCES "device"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sections" ADD CONSTRAINT "FK_8d5752925f83773ee6a0dc6b49b" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dispatch_times" ADD CONSTRAINT "FK_b6343e7b89f7c6f44a59afe0c1c" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_que" ADD CONSTRAINT "FK_275f683e509344ad3b87de19367" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch" ADD CONSTRAINT "FK_d916e8de3e93fdf6bd13c734237" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD CONSTRAINT "FK_eb4b519c71000506a73079e4562" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bays_product_product" ADD CONSTRAINT "FK_033a5dcc33322d961ca0a030019" FOREIGN KEY ("baysId") REFERENCES "bays"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bays_product_product" ADD CONSTRAINT "FK_52ac5d22338a674bf5b89edf1ba" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate_visitor_access_visitor_access_tags" ADD CONSTRAINT "FK_d67636362bfed386f1ad937d3d9" FOREIGN KEY ("gateId") REFERENCES "gate"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate_visitor_access_visitor_access_tags" ADD CONSTRAINT "FK_f2bd66cdc02ee09492bc93579dc" FOREIGN KEY ("visitorAccessTagsId") REFERENCES "visitor_access_tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate_bays_bays" ADD CONSTRAINT "FK_05617b1d107cf194bdeeaf60b67" FOREIGN KEY ("gateId") REFERENCES "gate"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate_bays_bays" ADD CONSTRAINT "FK_87c177a044b62147bd7b3b8ea8c" FOREIGN KEY ("baysId") REFERENCES "bays"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gate_bays_bays" DROP CONSTRAINT "FK_87c177a044b62147bd7b3b8ea8c"`);
        await queryRunner.query(`ALTER TABLE "gate_bays_bays" DROP CONSTRAINT "FK_05617b1d107cf194bdeeaf60b67"`);
        await queryRunner.query(`ALTER TABLE "gate_visitor_access_visitor_access_tags" DROP CONSTRAINT "FK_f2bd66cdc02ee09492bc93579dc"`);
        await queryRunner.query(`ALTER TABLE "gate_visitor_access_visitor_access_tags" DROP CONSTRAINT "FK_d67636362bfed386f1ad937d3d9"`);
        await queryRunner.query(`ALTER TABLE "bays_product_product" DROP CONSTRAINT "FK_52ac5d22338a674bf5b89edf1ba"`);
        await queryRunner.query(`ALTER TABLE "bays_product_product" DROP CONSTRAINT "FK_033a5dcc33322d961ca0a030019"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP CONSTRAINT "FK_eb4b519c71000506a73079e4562"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP CONSTRAINT "FK_d916e8de3e93fdf6bd13c734237"`);
        await queryRunner.query(`ALTER TABLE "order_que" DROP CONSTRAINT "FK_275f683e509344ad3b87de19367"`);
        await queryRunner.query(`ALTER TABLE "dispatch_times" DROP CONSTRAINT "FK_b6343e7b89f7c6f44a59afe0c1c"`);
        await queryRunner.query(`ALTER TABLE "sections" DROP CONSTRAINT "FK_8d5752925f83773ee6a0dc6b49b"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_2b3651f3fd95470304fabc1f02a"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_7567cac5e4386fff4f6ed8fc667"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_883f029045a01666a83c9fed4a4"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_27aabffb6c4bc1e5a88c5e82137"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_452848a83f567d0289c865ddfff"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_00c743b0023315c7bef605cc40e"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_bb788bfc4cc86b0ae31bf56f168"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_56606ad077291e37af569423412"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_3b3d84f3b8890b8afa409ffe015"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_07f1a140113cfa11902ad4c6d35"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_742c92af4b5861bc19d976d2b2e"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_2ee96d5eff55f14a6e37470b782"`);
        await queryRunner.query(`ALTER TABLE "presets" DROP CONSTRAINT "FK_5a5997986f331a95d545e5089c8"`);
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_cae70c648a6b56d55b38db00013"`);
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_44ed2374e3b14318d8fde9658d6"`);
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_41874d2ecb7400a606b090f5e88"`);
        await queryRunner.query(`ALTER TABLE "bays" DROP CONSTRAINT "FK_c3ef2a3d3dcdf7602751e6e47f2"`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_6f202a405e2209d741f8ec7e554"`);
        await queryRunner.query(`ALTER TABLE "pallet" DROP CONSTRAINT "FK_d3e8577c20f93ea348cce7b8c94"`);
        await queryRunner.query(`ALTER TABLE "order_details" DROP CONSTRAINT "FK_147bc15de4304f89a93c7eee969"`);
        await queryRunner.query(`ALTER TABLE "order_details" DROP CONSTRAINT "FK_5b8b822d6d90d45403690156915"`);
        await queryRunner.query(`ALTER TABLE "order_details" DROP CONSTRAINT "FK_c67ebaba3e5085b6401911acc70"`);
        await queryRunner.query(`ALTER TABLE "orders_orders" DROP CONSTRAINT "FK_a880bde8bf4c6942158bfb4aaa9"`);
        await queryRunner.query(`ALTER TABLE "orders_orders" DROP CONSTRAINT "FK_c3042e785e9926aced65b701f19"`);
        await queryRunner.query(`ALTER TABLE "orders_orders" DROP CONSTRAINT "FK_7f1f7adc071f0d853273ff557c1"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d7bf253fa56bf4e8f0fcb0ec3df"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_246426dfd001466a1d5e47322f4"`);
        await queryRunner.query(`ALTER TABLE "packing_tags" DROP CONSTRAINT "FK_75cfe36a2d635df1f5d8260e53d"`);
        await queryRunner.query(`ALTER TABLE "carrier" DROP CONSTRAINT "FK_85d59f7eb903b022f5a045f1509"`);
        await queryRunner.query(`ALTER TABLE "carrier" DROP CONSTRAINT "FK_62f0d204c7ecad7d89f03c1b876"`);
        await queryRunner.query(`ALTER TABLE "carrier_type" DROP CONSTRAINT "FK_0fef059578cdd03aeb5a051e486"`);
        await queryRunner.query(`ALTER TABLE "manual_entry" DROP CONSTRAINT "FK_deea2294ecc07f028b22c642449"`);
        await queryRunner.query(`ALTER TABLE "manual_entry" DROP CONSTRAINT "FK_f650abce59ce39b05385fec794e"`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" DROP CONSTRAINT "FK_156390a57ce9ef2d5a9fcbba427"`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" DROP CONSTRAINT "FK_13ddb82331f5e5029e5a2a59f12"`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" DROP CONSTRAINT "FK_5f90200738a38a2b0a61fc873af"`);
        await queryRunner.query(`ALTER TABLE "temporary_staff" DROP CONSTRAINT "FK_0d9ec525566f7f192575191d1b4"`);
        await queryRunner.query(`ALTER TABLE "temporary_staff" DROP CONSTRAINT "FK_243953d39bfdb940f2447680a94"`);
        await queryRunner.query(`DROP INDEX "IDX_87c177a044b62147bd7b3b8ea8"`);
        await queryRunner.query(`DROP INDEX "IDX_05617b1d107cf194bdeeaf60b6"`);
        await queryRunner.query(`DROP TABLE "gate_bays_bays"`);
        await queryRunner.query(`DROP INDEX "IDX_f2bd66cdc02ee09492bc93579d"`);
        await queryRunner.query(`DROP INDEX "IDX_d67636362bfed386f1ad937d3d"`);
        await queryRunner.query(`DROP TABLE "gate_visitor_access_visitor_access_tags"`);
        await queryRunner.query(`DROP INDEX "IDX_52ac5d22338a674bf5b89edf1b"`);
        await queryRunner.query(`DROP INDEX "IDX_033a5dcc33322d961ca0a03001"`);
        await queryRunner.query(`DROP TABLE "bays_product_product"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "reader"`);
        await queryRunner.query(`DROP TABLE "visitor"`);
        await queryRunner.query(`DROP TABLE "branch"`);
        await queryRunner.query(`DROP TABLE "order_que"`);
        await queryRunner.query(`DROP TABLE "dispatch_times"`);
        await queryRunner.query(`DROP TABLE "company"`);
        await queryRunner.query(`DROP TABLE "sections"`);
        await queryRunner.query(`DROP TABLE "alerts"`);
        await queryRunner.query(`DROP TABLE "gate"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "product_tags"`);
        await queryRunner.query(`DROP TABLE "presets"`);
        await queryRunner.query(`DROP TABLE "scan_product_history"`);
        await queryRunner.query(`DROP TABLE "device"`);
        await queryRunner.query(`DROP TABLE "bays"`);
        await queryRunner.query(`DROP TABLE "store"`);
        await queryRunner.query(`DROP TABLE "pallet"`);
        await queryRunner.query(`DROP TABLE "product_unit"`);
        await queryRunner.query(`DROP TABLE "order_details"`);
        await queryRunner.query(`DROP TABLE "orders_orders"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "packing_tags"`);
        await queryRunner.query(`DROP TABLE "carrier"`);
        await queryRunner.query(`DROP TABLE "carrier_type"`);
        await queryRunner.query(`DROP TABLE "manual_entry"`);
        await queryRunner.query(`DROP TABLE "user_privileges"`);
        await queryRunner.query(`DROP TABLE "visitor_access_tags"`);
        await queryRunner.query(`DROP TABLE "temporary_staff"`);
    }

}
