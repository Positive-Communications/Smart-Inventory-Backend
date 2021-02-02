import {Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Items from "./Items";
import Users from "./Users";
import ManualEntry from "./ManualEntry";

@Entity()
export default class Carrier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    status: string;

    @Column()
    userName: string;

    @Column()
    isFixedUse: boolean;

    @OneToMany(type => Items, item => item.destination)
    @JoinTable()
    items: Items[];

    @OneToMany(type => ManualEntry, manualEntry => manualEntry.carrier)
    @JoinTable()
    manualEntry: ManualEntry[];

    // @OneToMany(()=>Users, user=>user.carrier)
    // @JoinTable()
    // users[]
}
