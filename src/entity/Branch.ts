import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToOne, OneToOne} from 'typeorm';
import Alerts from "./Alerts";
import Sections from "./Sections";
import Company from "./Company";
import Gate from "./Gate";
import DispatchTimes from "./DispatchTimes";
import Store from "./Store";
import Users from "./Users";
import CarrierType from "./CarrierType";
import OrderQue from "./OrderQue";
import Device from "./Device";

@Entity()
export default class Branch {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    info: string;

    @Column()
    city: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    streetRoad: string;

    @Column()
    isActive: boolean;

    @OneToOne(type => OrderQue, orderQue=>orderQue.branch)
    orderQue: OrderQue

    @OneToMany(type => Gate, gate => gate.branch)
    @JoinTable()
    gates: Gate[]

    @ManyToOne(type => Company, company => company.branches)
    company: Company

    @OneToMany(type => Sections, section => section.branch)
    @JoinTable()
    sections: Branch[];

    @OneToMany(type => Store, store => store.branch)
    @JoinTable()
    stores: Store[]

    @OneToOne(type => DispatchTimes, dispatch => dispatch.branch)
    dispatchTimes: DispatchTimes


    @OneToMany(type => Users, users => users.branch)
    @JoinTable()
    users: Users[];

    @OneToMany(type=>CarrierType, type=>type.branch)
    @JoinTable()
    carrierTypes: CarrierType[]

    @OneToMany(type=>Device, device=> device.branch)
    @JoinTable()
    devices: Device[];

}

