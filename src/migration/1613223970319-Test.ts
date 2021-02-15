import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1613223970319 implements MigrationInterface {
    name = 'Test1613223970319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ADD "superAdminId" integer`);
        await queryRunner.query(`ALTER TABLE "company" ADD CONSTRAINT "UQ_cd4f3580a08a72ff162cbcad208" UNIQUE ("superAdminId")`);
        await queryRunner.query(`ALTER TABLE "company" ADD CONSTRAINT "FK_cd4f3580a08a72ff162cbcad208" FOREIGN KEY ("superAdminId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" DROP CONSTRAINT "FK_cd4f3580a08a72ff162cbcad208"`);
        await queryRunner.query(`ALTER TABLE "company" DROP CONSTRAINT "UQ_cd4f3580a08a72ff162cbcad208"`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "superAdminId"`);
    }

}
