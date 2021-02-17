import {Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Users from "./Users";
import ManualEntry from "./ManualEntry";
import CarrierType from "./CarrierType";
import readCarrierTypeByID from "../helpers/R/ByID/ReadCarrierTypeByID";
import readUserByID from "../helpers/R/ByID/ReadUserByID";

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

    @OneToOne(type => Users, user => user.carrier)
    @JoinColumn()
    user: Users;

    @ManyToOne(type => CarrierType, type => type.carriers)
    type: CarrierType


    @OneToMany(type => ManualEntry, manualEntry => manualEntry.carrier)
    @JoinTable()
    manualEntry: ManualEntry[];


    async createItSelf(data) {
        this.No = data.number;
        this.type = await readCarrierTypeByID(data.type);
        this.user = await readUserByID(data.user);
        this.isFixedUse = data.isFixed;
        this.status = "empty";
    }

}
