import {Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
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

    @Column()
    role: string;

    @Column()
    allowPalletsToBeCountedManually: boolean;

    @Column()
    isActive: boolean;

    @Column()
    hasErrors: boolean;

    @Column()
    doNotAllowRemovalOfEmptyPallet: boolean;

    @Column()
    verifyStoredUsingHandHeld: boolean;

    @Column()
    showProductCountError: boolean;

    @Column()
    doNotAllowRemoval: boolean;

    @Column()
    verifyProductNotTrackedByRFID: boolean;

    @Column()
    automaticallyActivateRecallProductIfRequired: boolean;

    @Column()
    recordEmptyPallets: boolean;

    @Column()
    dispatchingOrReceiving: boolean;

    @ManyToOne(type => Sections, section => section.devices)
    sections: Sections

    @ManyToOne(type => Bays, bays=>bays.devices )
    bays: Bays;


    @OneToMany(type => Alerts, alert => alert.device)
    @JoinTable()
    alerts: Alerts[];

    @ManyToOne(type=>Branch, branch=>branch.devices)
    branch: Branch;
}