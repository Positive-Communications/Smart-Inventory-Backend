import {Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {stat} from "fs";
import branch from "./Branch";

@Entity()
export default class Company{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

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

    @OneToMany(()=>branch, branch=>branch.company)
    @JoinTable()
    branches: branch[]
}