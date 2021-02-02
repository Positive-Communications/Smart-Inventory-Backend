import {Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Sections from "./Sections";
import ScanProductHistory from "./ScanProductHistory";
import Alerts from "./Alerts";

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

    @ManyToOne(() => Sections, section => section.devices)
    accessTo: Sections

    @OneToMany(() => ScanProductHistory, history => history.device)
    @JoinTable()
    history: ScanProductHistory

    @OneToMany(() => Alerts, alert => alert.device)
    @JoinTable()
    alerts: Alerts[];
}