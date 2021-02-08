import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Users from "./Users";

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
    scanAccessCard:boolean;

    @Column()
    packagingAndStorageAlerts: boolean;

    @Column()
    orderDispatchAlerts: boolean;

}