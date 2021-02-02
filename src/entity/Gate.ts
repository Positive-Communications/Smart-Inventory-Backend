import {Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Sections from "./Sections";
import TemporaryStaff from "./TemporaryStaff";
import Visitor from "./Visitor";
import Product from "./Product";
import ScanProductHistory from "./ScanProductHistory";
import Alerts from "./Alerts";

@Entity()
export default class Gate {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    role: string;

    @Column()
    isaActive: boolean;

    @ManyToOne(() => Sections, section => section.gates)
    accessTo: Sections

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
}