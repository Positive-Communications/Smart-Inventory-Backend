import {Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {stat} from "fs";
import _Branch from "./_Branch";

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

    @OneToMany(()=>_Branch, branch=>branch.company)
    @JoinTable()
    branches: _Branch[]
}