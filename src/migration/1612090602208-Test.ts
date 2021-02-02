import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1612090602208 implements MigrationInterface {
    name = 'Test1612090602208'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_883f029045a01666a83c9fed4a4"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_1131dbba0dfa97304bc4ca07818"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_cb1ddc1929c66453d19ad51ad27"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_66232231dc0c2613ab076c5ea65"`);
        await queryRunner.query(`CREATE TABLE "sections" ("id" SERIAL NOT NULL, "role" character varying NOT NULL, "name" character varying NOT NULL, "capacity" integer NOT NULL, "branchId" integer, CONSTRAINT "PK_f9749dd3bffd880a497d007e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_883f029045a01666a83c9fed4a4" FOREIGN KEY ("sectionsId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_1131dbba0dfa97304bc4ca07818" FOREIGN KEY ("fromId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_cb1ddc1929c66453d19ad51ad27" FOREIGN KEY ("destinationId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_66232231dc0c2613ab076c5ea65" FOREIGN KEY ("accessToId") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sections" ADD CONSTRAINT "FK_8d5752925f83773ee6a0dc6b49b" FOREIGN KEY ("branchId") REFERENCES "__branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sections" DROP CONSTRAINT "FK_8d5752925f83773ee6a0dc6b49b"`);
        await queryRunner.query(`ALTER TABLE "gate" DROP CONSTRAINT "FK_66232231dc0c2613ab076c5ea65"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_cb1ddc1929c66453d19ad51ad27"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_1131dbba0dfa97304bc4ca07818"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_883f029045a01666a83c9fed4a4"`);
        await queryRunner.query(`DROP TABLE "sections"`);
        await queryRunner.query(`ALTER TABLE "gate" ADD CONSTRAINT "FK_66232231dc0c2613ab076c5ea65" FOREIGN KEY ("accessToId") REFERENCES "unit_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_cb1ddc1929c66453d19ad51ad27" FOREIGN KEY ("destinationId") REFERENCES "unit_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_1131dbba0dfa97304bc4ca07818" FOREIGN KEY ("fromId") REFERENCES "unit_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_883f029045a01666a83c9fed4a4" FOREIGN KEY ("sectionsId") REFERENCES "unit_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
