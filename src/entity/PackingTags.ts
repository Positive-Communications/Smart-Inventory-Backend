import {Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Users from "./Users";
import Gate from "./Gate";

@Entity()
export default class PackingTags {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    parkingName: string;

    @Column()
    vehicleReg: string;

    @Column()
    expiry: string;

    @OneToMany(type => Gate, gate => gate.parkingAccess)
    @JoinTable()
    accessGates: Gate[];

    @OneToOne(type => Users, user => user.parkingTags)
    @JoinColumn()
    driver: Users;
}