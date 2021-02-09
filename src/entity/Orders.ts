import {Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Branch from "./Branch";
import Product from "./Product";
import Users from "./Users";
import OrderDetails from "./OrderDetails";
import readBranchByID from "../helpers/R/ByID/ReadBranchByID";
import readUserByID from "../helpers/R/ByID/ReadUserByID";
import saveMultipleOrderDetails from "../helpers/C/Multiple/SaveMultipleOrderDetails";

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

    async createItself(data) {

        this.orderNumber = data.orderNumber;
        this.date = data.date;
        this.collectionOrderFor = data.collectionOrderFor;
        this.customerName = data.customerName;
        this.customerEmail = data.customerEmail;
        this.orderNumber = data.orderAmount;
        this.paymentStatus = data.paymentStatus;
        this.collectionBy = data.collectionBy;
        this.identificationType = data.identificationType;
        this.identificationNumber = data.identificationNumber;
        this.vehicleReg = data.vehicleReg;
        this.collectedFrom = await readBranchByID(data.branchID);
        this.issuedBy = await readBranchByID(data.branchID);
        this.checkedBy = await readUserByID(data.userID)
        this.orderDetails = await saveMultipleOrderDetails(data.orderDetails)
    }

    async isLegit() {
        return true;
    }

}