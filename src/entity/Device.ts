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

    @Column({
        nullable: true
    })
    name: string;

    @Column({
        default:false
    })
    isHandHeld: boolean;

    @Column({
        default:false
    })
    isSensor: boolean;

    @Column({
        default: false
    })
    isTablet: boolean;

    @Column({
        default: false
    })
    isWeb: boolean;

    @Column({
        default: "unrecognized"
    })
    uuid: string;

    @Column({
        default: false
    })
    isFixed: boolean

    @Column({
        default: "empty"
    })
    role: string;

    @Column({
        default: false
    })
    allowPalletsToBeCountedManually: boolean;

    @Column({
        default: false
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

    assignUUID = async()=>{
        this.uuid = uuidv4();
    }
}


const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}