import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Branch from "./Branch";

@Entity()
export default class Visitor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tagType: string;

    @Column()
    userName: string;

    @Column()
    identificationType: string;

    @Column()
    identificationNumber: string;

    @Column()
    uploadIdentification: string;

    @Column()
    userImage: string;

    @Column()
    workDesc: string;

    @ManyToOne(type=>Branch, branch=>branch.staffAccessCards)
    branch: Branch;
VM
}