import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Carrier from "./Carrier";
import Branch from "./Branch";

@Entity()
export default class CarrierType{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Carrier, carrier=>carrier.type)
    @JoinTable()
    carriers: Carrier[]

    @ManyToOne(type => Branch, branch=>branch.carrierTypes)
    branch: Branch;
}