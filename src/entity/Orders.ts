import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Branch from "./Branch";
import Users from "./Users";
import OrderDetails from "./OrderDetails";
import readBranchByID from "../helpers/R/ByID/ReadBranchByID";
import saveMultipleOrderDetails from "../helpers/C/Multiple/SaveMultipleOrderDetails";

@Entity()
export default class Orders {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
    })
    orderNumber: string;

    @Column()
    date: string;

    @Column()
    typeOfClient: string;

    @Column()
    isBranchDeportOrder: boolean;

    @Column()
    customerName: string;

    @Column()
    customerEmail: string;

    @Column()
    customerPhone: string;

    @Column({
        default: "issued"
    })
    status: string;

    @Column({
        default: "0",
    })
    orderAmount: string;

    @Column({
        default: "pending"
    })
    paymentStatus: string;

    @Column()
    collectionBy: string;

    @Column()
    identificationType: string;

    @Column()
    identificationNumber: string;

    @Column()
    vehicleReg: string;

    @Column()
    checkedBy: string;

    @OneToMany(type => OrderDetails, details => details.order)
    @JoinTable()
    orderDetails: OrderDetails[]


    @ManyToOne(type => Branch, branch => branch.branchOrders)
    orderBranch: Branch


    @ManyToOne(type => Branch, branch => branch.pendingOrders)
    collectionFrom: Branch;

    @ManyToOne(type => Branch, branch => branch.issueOrders)
    issuedBy: Branch;


    async createItself(data: { orderNumber: string; date: string; customerName: string; typeOfClient: string; customerEmail: string; customerPhone: string; isBranchDeportOrder: boolean; collectionBy: string; identificationType: string; identificationNumber: string; vehicleReg: string; issuedBy: any; collectionFrom: any; checkedBy: string; orderDetails: any; }) {

        this.orderNumber = data.orderNumber;
        this.date = data.date;
        this.customerName = data.customerName;
        this.typeOfClient = data.typeOfClient;
        this.customerEmail = data.customerEmail;
        this.customerPhone = data.customerPhone;
        this.isBranchDeportOrder = data.isBranchDeportOrder
        this.collectionBy = data.collectionBy;
        this.identificationType = data.identificationType;
        this.identificationNumber = data.identificationNumber;
        this.vehicleReg = data.vehicleReg;
        this.issuedBy = await readBranchByID(data.issuedBy);
        this.collectionFrom = await readBranchByID(data.collectionFrom)
        this.checkedBy = data.checkedBy;
        this.orderDetails = await saveMultipleOrderDetails(data.orderDetails)
    }

    async isLegit() {
        return true;
    }

}


