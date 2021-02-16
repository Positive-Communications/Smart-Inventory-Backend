import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToOne, OneToOne, AfterInsert} from 'typeorm';
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
import VisitorAccessTags from "./VisitorAccessTags";
import AccessCard from "./AccessCard";
import Orders from "./Orders";
import saveDispatchTimes from '../helpers/C/singles/SaveDispatchTimes';

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

    @OneToOne(type => OrderQue, orderQue => orderQue.branch)
    orderQue: OrderQue

    @OneToMany(type => Gate, gate => gate.branch)
    @JoinTable()
    gates: Gate[];

    @ManyToOne(type => Company, company => company.branches)
    company: Company;

    @OneToMany(type => VisitorAccessTags, visitor => visitor.branch)
    @JoinTable()
    visitors: VisitorAccessTags[];

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

    @OneToMany(type => CarrierType, type => type.branch)
    @JoinTable()
    carrierTypes: CarrierType[]

    @OneToMany(type => Device, device => device.branch)
    @JoinTable()
    devices: Device[];

    @OneToMany(type => AccessCard, cards => cards.branch)
    @JoinTable()
    staffAccessCards: AccessCard[];

    @OneToMany(type => Orders, orders => orders.issuedBy)
    @JoinTable()
    issueOrders: Orders[]

    @OneToMany(type=>Orders, order=>order.collectedFrom)
    @JoinTable()
    ordersToCollect: Orders[];

    @AfterInsert()
    async saveDispatchT(){
        await saveDispactchTime(this.id)
    }


}

let data = {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false,
    startTime: "0800",
    endTime: "1700",
    saturdayStart: "1300",
    saturdayEnd: "1700",
    sundayStart: "1300",
    sundayEnd: "1700",
    branchID: "",
}

const saveDispactchTime = async(id)=>{
    console.log(id);
    let d = data;
    d['branchID'] = id;
    console.log(d);
    let res = await saveDispatchTimes(d);
    console.log(res);
}


