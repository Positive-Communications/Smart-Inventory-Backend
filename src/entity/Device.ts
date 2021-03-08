import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Sections from "./Sections";
import ScanProductHistory from "./ScanProductHistory";
import Alerts from "./Alerts";
import Bays from "./Bays";
import Branch from "./Branch";

@Entity()
export default class Device {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        default: "empty"
    })
    role: string;

    @Column({
        default: false
    })
    allowPalletsToBeCountedManually: boolean;

    @Column({
        default: true
    })
    isActive: boolean;

    @Column({
        default: false
    })
    hasErrors: boolean;

    @Column({
        default: false
    })
    doNotAllowRemovalOfEmptyPallet: boolean;

    @Column({
        default: false
    })
    verifyStoredUsingHandHeld: boolean;

    @Column({
        default: false
    })
    showProductCountError: boolean;

    @Column({
        default: false
    })
    doNotAllowRemoval: boolean;

    @Column({
        default: false
    })
    verifyProductNotTrackedByRFID: boolean;

    @Column({
        default: false
    })
    automaticallyActivateRecallProductIfRequired: boolean;

    @Column({
        default: false
    })
    recordEmptyPallets: boolean;

    @Column({
        default: false
    })
    dispatchingOrReceiving: boolean;

    @ManyToOne(type => Sections, section => section.devices)
    sections: Sections

    @ManyToOne(type => Bays, bays => bays.devices)
    bays: Bays;


    @OneToMany(type => Alerts, alert => alert.device)
    @JoinTable()
    alerts: Alerts[];

    @ManyToOne(type => Branch, branch => branch.devices)
    branch: Branch;
}