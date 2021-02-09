import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Users from "./Users";
import readUserByID from "../helpers/R/ByID/ReadUserByID";

@Entity()
export default class UserPrivileges {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Users, user => user.privileges)
    user: Users

    @Column()
    isAdmin: boolean;

    @Column()
    addOrEditUsers: boolean;

    @Column()
    canViewOrderAmount: boolean;

    @Column()
    issueEditCollectionReplacementOrder: boolean;

    @Column()
    loadCollectionOrder: boolean;

    @Column()
    loadPartialProductQuantity: boolean;

    @Column()
    setGateDeviceSettings: boolean;

    @Column()
    setProductTags: boolean;

    @Column()
    setCarrierSettings: true;

    @Column()
    setStorageBays: boolean;


    @Column()
    setOrderQueSettings: boolean;

    @Column()
    setAccessSettings: boolean;

    @Column()
    scanAccessCard: boolean;

    @Column()
    packagingAndStorageAlerts: boolean;

    @Column()
    orderDispatchAlerts: boolean;

    async createItself(data) {
        this.isAdmin = data.isAdmin;
        this.addOrEditUsers = data.addOrEditUsers;
        this.canViewOrderAmount = data.canViewOrderAmount;
        this.issueEditCollectionReplacementOrder = data.issueEditCollectionReplacementOrder;
        this.loadCollectionOrder = data.loadCollectionOrder;
        this.loadPartialProductQuantity = data.loadPartialProductQuantity;
        this.setGateDeviceSettings = data.setGateDeviceSettings;
        this.setProductTags = data.setProductTags;
        this.setCarrierSettings = data.setCarrierSettings;
        this.setStorageBays = data.setStorageBays;
        this.setOrderQueSettings = data.setOrderQueSettings
        this.setAccessSettings = data.setAccessSettings;
        this.scanAccessCard = data.scanAccessCard;
        this.packagingAndStorageAlerts = data.packagingAndStorageAlerts;
        this.orderDispatchAlerts = data.orderDispatchAlerts;
    }

}