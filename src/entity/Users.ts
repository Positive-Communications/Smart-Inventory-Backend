import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {fchmod} from "fs";

@Entity()
export default class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    identificationType: string;

    @Column()
    identificationNumber: number;

    @Column()
    identificationPhoto: string;

    @Column()
    designation: string;

    @Column()
    isCarrier: boolean;

    @Column()
    departmentWorkArea: string;

    @Column()
    phone: number;

    @Column()
    mobile: number;

    @Column()
    email: string;

    @Column()
    joined: string;

    @Column()
    isAdmin: boolean;

    @Column()
    canAddUsers: boolean;

    @Column()
    canViewOrderAmount: boolean;

    @Column()
    issueEditCollectionReplacementOrder: boolean;

    @Column()
    viewCollectionHistory: boolean;

    @Column()
    loadCollectionOrder: boolean;

    @Column()
    setGateDeviceSettings: boolean;

    @Column()
    setProductsAndTags: boolean;

    @Column()
    setCarrierSettings: boolean;

    @Column()
    setStorageBays: boolean;

    @Column()
    setOrderQueSettings: boolean;

    @Column()
    setAccessSettings: boolean;

    @Column()
    setAccessCard: boolean;

    @Column()
    receivePackagingAndStagingAlerts: boolean;

    @Column()
    orderDispatchAlerts: boolean;


}