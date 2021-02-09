import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612798659327 implements MigrationInterface {
    name = 'Test1612798659327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visitor" DROP CONSTRAINT "FK_e02f95b5cac9ec60387215dbf2a"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_e3e034e67f7d2cfaac0c30b15c2"`);
        await queryRunner.query(`CREATE TABLE "packing_tags" ("id" SERIAL NOT NULL, "parkingName" character varying NOT NULL, "vehicleReg" character varying NOT NULL, "expiry" character varying NOT NULL, "driverId" integer, CONSTRAINT "REL_75cfe36a2d635df1f5d8260e53" UNIQUE ("driverId"), CONSTRAINT "PK_db44fc07210fb99b2263ccb6f0f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitor_access_tags" ("id" SERIAL NOT NULL, "tagType" character varying NOT NULL, "userName" character varying NOT NULL, "identificationType" character varying NOT NULL, "identificationNumber" character varying NOT NULL, "identificationImage" character varying NOT NULL, "visitorsCompany" character varying NOT NULL, "designation" character varying NOT NULL, "phone" character varying NOT NULL, "mobile" character varying NOT NULL, "email" character varying NOT NULL, "expiry" character varying NOT NULL, "branchId" integer, CONSTRAINT "PK_028c21d35c0cf30190930272a48" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reader" ("id" SERIAL NOT NULL, "numberOfAnts" integer NOT NULL, "outGoingAnt" character varying NOT NULL, "incomingAnt" character varying NOT NULL, "ant1Power" character varying NOT NULL, "ant2Power" character varying NOT NULL, "ant3Power" character varying NOT NULL, "ant4Power" character varying NOT NULL, CONSTRAINT "PK_6f40e8c75b734b9073be81a4564" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gate_visitor_access_visitor_access_tags" ("gateId" integer NOT NULL, "visitorAccessTagsId" integer NOT NULL, CONSTRAINT "PK_6ee54a6c5a6277b957e3fadbfc3" PRIMARY KEY ("gateId", "visitorAccessTagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d67636362bfed386f1ad937d3d" ON "gate_visitor_access_visitor_access_tags" ("gateId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f2bd66cdc02ee09492bc93579d" ON "gate_visitor_access_visitor_access_tags" ("visitorAccessTagsId") `);
        await queryRunner.query(`CREATE TABLE "gate_visitor_exit_visitor_access_tags" ("gateId" integer NOT NULL, "visitorAccessTagsId" integer NOT NULL, CONSTRAINT "PK_144c9da57e8a49afe03ec32e9ff" PRIMARY KEY ("gateId", "visitorAccessTagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f9f99e9fc5afab85dd45fcfef9" ON "gate_visitor_exit_visitor_access_tags" ("gateId") `);
        await queryRunner.query(`CREATE INDEX "IDX_607cc5763374b3794a4749845b" ON "gate_visitor_exit_visitor_access_tags" ("visitorAccessTagsId") `);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "identificationPhoto"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "accessGatesId"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "designation"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "company"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP COLUMN "visitorAccessId"`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "tagType" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "userName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "uploadIdentification" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "userImage" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "workDesc" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gate" ADD "parkingAccessId" integer`);
        await queryRunner.query(`ALTER TABLE "gate" ADD "visitorsId" integer`);
        await queryRunner.query(`ALTER TABLE "packing_tags" ADD CONSTRAINT "FK_75cfe36a2d635df1f5d8260e53d" FOREIGN KEY ("driverId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" ADD CONSTRAINT "FK_156390a57ce9ef2d5a9fcbba427" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_00c743b0023315c7bef605cc40e" FOREIGN KEY ("parkingAccessId") REFERENCES "packing_tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_27aabffb6c4bc1e5a88c5e82137" FOREIGN KEY ("visitorsId") REFERENCES "visitor_access_tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate_visitor_access_visitor_access_tags" ADD CONSTRAINT "FK_d67636362bfed386f1ad937d3d9" FOREIGN KEY ("gateId") REFERENCES "gate"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate_visitor_access_visitor_access_tags" ADD CONSTRAINT "FK_f2bd66cdc02ee09492bc93579dc" FOREIGN KEY ("visitorAccessTagsId") REFERENCES "visitor_access_tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate_visitor_exit_visitor_access_tags" ADD CONSTRAINT "FK_f9f99e9fc5afab85dd45fcfef99" FOREIGN KEY ("gateId") REFERENCES "gate"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate_visitor_exit_visitor_access_tags" ADD CONSTRAINT "FK_607cc5763374b3794a4749845bc" FOREIGN KEY ("visitorAccessTagsId") REFERENCES "visitor_access_tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gate_visitor_exit_visitor_access_tags" DROP CONSTRAINT "FK_607cc5763374b3794a4749845bc"`);
        await queryRunner.query(`ALTER TABLE "gate_visitor_exit_visitor_access_tags" DROP CONSTRAINT "FK_f9f99e9fc5afab85dd45fcfef99"`);
        await queryRunner.query(`ALTER TABLE "gate_visitor_access_visitor_access_tags" DROP CONSTRAINT "FK_f2bd66cdc02ee09492bc93579dc"`);
        await queryRunner.query(`ALTER TABLE "gate_visitor_access_visitor_access_tags" DROP CONSTRAINT "FK_d67636362bfed386f1ad937d3d9"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_27aabffb6c4bc1e5a88c5e82137"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_00c743b0023315c7bef605cc40e"`);
        await queryRunner.query(`ALTER TABLE "visitor_access_tags" DROP CONSTRAINT "FK_156390a57ce9ef2d5a9fcbba427"`);
        await queryRunner.query(`ALTER TABLE "packing_tags" DROP CONSTRAINT "FK_75cfe36a2d635df1f5d8260e53d"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP COLUMN "visitorsId"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP COLUMN "parkingAccessId"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "workDesc"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "userImage"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "uploadIdentification"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "userName"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "tagType"`);
        await queryRunner.query(`ALTER TABLE "gate" ADD "visitorAccessId" integer`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "company" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "designation" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "accessGatesId" integer`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "identificationPhoto" character varying NOT NULL`);
        await queryRunner.query(`DROP INDEX "IDX_607cc5763374b3794a4749845b"`);
        await queryRunner.query(`DROP INDEX "IDX_f9f99e9fc5afab85dd45fcfef9"`);
        await queryRunner.query(`DROP TABLE "gate_visitor_exit_visitor_access_tags"`);
        await queryRunner.query(`DROP INDEX "IDX_f2bd66cdc02ee09492bc93579d"`);
        await queryRunner.query(`DROP INDEX "IDX_d67636362bfed386f1ad937d3d"`);
        await queryRunner.query(`DROP TABLE "gate_visitor_access_visitor_access_tags"`);
        await queryRunner.query(`DROP TABLE "reader"`);
        await queryRunner.query(`DROP TABLE "visitor_access_tags"`);
        await queryRunner.query(`DROP TABLE "packing_tags"`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_e3e034e67f7d2cfaac0c30b15c2" FOREIGN KEY ("visitorAccessId") REFERENCES "visitor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD CONSTRAINT "FK_e02f95b5cac9ec60387215dbf2a" FOREIGN KEY ("accessGatesId") REFERENCES "gate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
