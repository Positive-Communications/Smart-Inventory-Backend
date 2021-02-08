import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Sections from "./Sections";
import TemporaryStaff from "./TemporaryStaff";
import Visitor from "./Visitor";
import Product from "./Product";
import ScanProductHistory from "./ScanProductHistory";
import Alerts from "./Alerts";
import Branch from "./Branch";
import Bays from "./Bays";

@Entity()
export default class Gate {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    role: string;

    @Column()
    hasErrors: boolean;

    @Column()
    isaActive: boolean;

    @Column()
    allowManual: boolean;

    @Column()
    allowEmpty: boolean;

    @Column()
    verifyByHandheld: boolean;

    @Column()
    verifyNotTrackedByRFID: boolean;

    @Column()
    checkContinuouslyForUnauthorized: boolean;

    @Column()
    doNotAllowRemoved: boolean;

    @Column()
    useForDispatchOrReceiving: boolean;

    @Column()
    allowDispatchForAllOrders: boolean;

    @Column()
    showProductCountError: boolean;

    @Column()
    allowEmptyPallets: boolean;

    @Column()
    getToDetermineItemPosition: boolean;

    @Column()
    verifyCarrierIsEmpty: boolean;

    @ManyToOne(type => Branch, branch => branch.gates)
    branch: Branch;

    @OneToMany(() => TemporaryStaff, staff => staff.entryGate)
    @JoinTable()
    temporaryEntryPoint: TemporaryStaff[]

    @OneToMany(() => TemporaryStaff, staff => staff.exitGate)
    @JoinTable()
    temporaryExit: TemporaryStaff[];

    @ManyToOne(() => Visitor, visitor => visitor.accessGates)
    visitorAccess: Visitor[];

    @OneToMany(() => Product, product => product.dispatchGate)
    @JoinTable()
    dispatchedProducts: Product[];

    @OneToMany(() => ScanProductHistory, history => history.gate)
    @JoinTable()
    scanHistory: ScanProductHistory[];

    @OneToMany(()=>Alerts, alerts=>alerts.gate)
    @JoinTable()
    alerts:[];

    @ManyToMany(() => Sections, section => section.gates)
    sections: Sections[]

    @ManyToMany(type=>Bays, bays=>bays.gates)
    @JoinTable()
    bays: Bays[];
}