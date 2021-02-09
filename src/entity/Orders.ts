import {Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Branch from "./Branch";
import Product from "./Product";
import Users from "./Users";
import OrderDetails from "./OrderDetails";

@Entity()
export default class OrdersOrders {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderNumber: string;

    @Column()
    date: string;

    @Column()
    collectionOrderFor: string;

    @Column()
    customerName: string;

    @Column()
    customerEmail: string;

    @Column()
    orderAmount: string;

    @Column()
    paymentStatus: string;

    @Column()
    collectionBy: string;

    @Column()
    identificationType: string;

    @Column()
    identificationNumber: string;

    @Column()
    vehicleReg: string;

    @OneToMany(type => OrderDetails, details => details.order)
    @JoinTable()
    orderDetails: OrderDetails[]


    @ManyToOne(type => Branch, branch => branch.ordersToCollect)
    collectedFrom: Branch;

    @ManyToOne(type => Branch, branch => branch.issueOrders)
    issuedBy: Branch;

    @ManyToOne(type => Users, users => users.checkedOrders)
    checkedBy: Users;

    async createItself() {

    }

    async isLegit() {
        return true;
    }

}