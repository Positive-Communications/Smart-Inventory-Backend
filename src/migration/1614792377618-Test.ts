import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1614792377618 implements MigrationInterface {
    name = 'Test1614792377618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "move" ("id" SERIAL NOT NULL, "fromID" integer NOT NULL, "toID" integer NOT NULL, "fromType" character varying NOT NULL, "toType" character varying NOT NULL, "timeStamp" character varying NOT NULL, "carrierId" integer, CONSTRAINT "PK_0befa9c6b3a216e49c494b4acc5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "move" ADD CONSTRAINT "FK_3cb073e3c5cf2ec75f7851cb2f9" FOREIGN KEY ("carrierId") REFERENCES "carrier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "move" DROP CONSTRAINT "FK_3cb073e3c5cf2ec75f7851cb2f9"`);
        await queryRunner.query(`DROP TABLE "move"`);
    }

}
