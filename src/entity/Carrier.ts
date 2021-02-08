import {Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Users from "./Users";
import ManualEntry from "./ManualEntry";
import CarrierType from "./CarrierType";

@Entity()
export default class Carrier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    No: number;

    @Column()
    status: string;

    @Column()
    isFixedUse: boolean;

    @OneToOne(type=>Users, user=>user.carrier)
    @JoinColumn()
    user: Users;

    @ManyToOne(type=>CarrierType, type=>type.carriers   )
    type: CarrierType


    @OneToMany(type => ManualEntry, manualEntry => manualEntry.carrier)
    @JoinTable()
    manualEntry: ManualEntry[];

}
