import { AfterInsert, Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import saveSuperUser from "../Auth/saveSupserUser";
import branch from "./Branch";
import Tags from "./Tags";
import Users from "./Users";

@Entity()
export default class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    name: string;

    @Column({
        nullable: true
    })
    city: string;

    @Column({
        default: new Date().getTime().toString()
    })
    registered: string;

    @Column({
        nullable: true
    })
    info: string;


    @Column({
        nullable: true
    })
    headOffice: string;

    @Column({
        nullable: true
    })
    email: string;

    @Column({
        nullable: true
    })
    streetRoad: string;

    @Column({
        nullable: true
    })
    primaryNumber: string;

    @Column({
        nullable: true
    })
    secondaryNumber: string;

    @OneToMany(type => branch, branch => branch.company)
    @JoinTable()
    branches: branch[]

    @OneToOne(type => Users, user => user.isSuper)
    @JoinColumn()
    superAdmin: Users;

    @OneToMany(type => Tags, tag => tag.company)
    @JoinTable()
    tags: Tags[];

    @AfterInsert()
    async createSuperUser() {
        // createSuperSu(this.name, this.id)
    }
}

// const createSuperSu = async (name, id) => {
    // return await saveSuperUser(name, id);
// }