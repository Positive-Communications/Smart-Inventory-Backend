import { AfterInsert, Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import saveSuperUser from "../Auth/saveSupserUser";
import branch from "./Branch";
import Users from "./Users";

@Entity()
export default class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        nullable: true
    })
    city: string;

    @Column({
        nullable: true
    })
    info: string;


    @Column()
    headOffice: string;

    @Column()
    email: string;

    @Column()
    streetRoad: string;

    @Column()
    primaryNumber: string;

    @Column()
    secondaryNumber: string;

    @OneToMany(type => branch, branch => branch.company)
    @JoinTable()
    branches: branch[]

    @OneToOne(type => Users, user => user.isSuper)
    @JoinColumn()
    superAdmin: Users;

    @AfterInsert()
    async createSuperUser() {
        createSuperSu(this.name, this.id)
    }
}

const createSuperSu = async (name, id) => {
    return await saveSuperUser(name, id);
}