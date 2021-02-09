import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Sections from "./Sections";
import TemporaryStaff from "./TemporaryStaff";
import VisitorAccessTags from "./VisitorAccessTags";
import Product from "./Product";
import ScanProductHistory from "./ScanProductHistory";
import Alerts from "./Alerts";
import Branch from "./Branch";
import Bays from "./Bays";
import PackingTags from "./PackingTags";
import readBranchByID from "../helpers/R/ByID/ReadBranchByID";


@Entity()
export default class Gate {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    readerAddress: string;

    @Column()
    numberOfAnts: string;

    @Column()
    antToDetectOutgoing: number;

    @Column()
    antToDetectIncoming: number;

    @Column()
    ant1: boolean;

    @Column()
    ant2: boolean;

    @Column()
    ant3: boolean;

    @Column()
    ant4: boolean;

    @Column()
    ant1Power: string;

    @Column()
    ant2Power: string;

    @Column()
    ant3Power: string;

    @Column()
    ant4Power: string;

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

    @ManyToOne(type => PackingTags, parking => parking.accessGates)
    parkingAccess: PackingTags;

    @ManyToOne(type => Branch, branch => branch.gates)
    branch: Branch;

    @OneToMany(type => VisitorAccessTags, visitor => visitor.entryGate)
    @JoinTable()
    visitorEntries: VisitorAccessTags[];

    @OneToMany(() => TemporaryStaff, staff => staff.entryGate)
    @JoinTable()
    temporaryEntryPoint: TemporaryStaff[];

    @OneToMany(() => TemporaryStaff, staff => staff.exitGate)
    @JoinTable()
    temporaryExit: TemporaryStaff[];

    @ManyToMany(() => VisitorAccessTags, visitor => visitor.accessGates)
    @JoinTable()
    visitorAccess: VisitorAccessTags[];

    @OneToMany(type => VisitorAccessTags, visitor => visitor.exitGate)
    @JoinTable()
    visitorExit: VisitorAccessTags[]

    @OneToMany(() => Product, product => product.dispatchGate)
    @JoinTable()
    dispatchedProducts: Product[];

    @OneToMany(() => ScanProductHistory, history => history.gate)
    @JoinTable()
    scanHistory: ScanProductHistory[];

    @OneToMany(() => Alerts, alerts => alerts.gate)
    @JoinTable()
    alerts: [];

    @ManyToMany(() => Sections, section => section.gates)
    sections: Sections[];

    @ManyToMany(type => Bays, bays => bays.gates)
    @JoinTable()
    bays: Bays[];

    @ManyToOne(type => VisitorAccessTags, visitor => visitor.accessGates)
    visitors: VisitorAccessTags[]

    async createItself(data) {

        this.name = data.name;
        this.readerAddress = data.readerAddress;
        this.numberOfAnts = data.numberOfAnts;
        this.antToDetectOutgoing = data.antToDetectOutgoing
        this.antToDetectIncoming = data.antToDetectIncoming
        this.ant1 = data.ant1
        this.ant2 = data.ant2
        this.ant3 = data.ant3
        this.ant4 = data.ant4
        this.ant1Power = data.ant1Power
        this.ant2Power = data.ant2Power
        this.ant3Power = data.ant3Power
        this.ant4Power = data.ant4Power
        this.role = data.role;
        this.hasErrors = data.hasErrors;
        this.isaActive = data.isActive;
        this.allowManual = data.allowManual;
        this.allowEmpty = data.allowEmpty;
        this.verifyNotTrackedByRFID = data.verifyNotTrackedByRFID;
        this.checkContinuouslyForUnauthorized = data.checkContinuouslyForUnauthorized;
        this.doNotAllowRemoved = data.doNotAllowRemoved;
        this.useForDispatchOrReceiving = data.useForDispatchOrReceiving;
        this.allowDispatchForAllOrders = data.allowDispatchForAllOrders;
        this.showProductCountError = data.showProductCountError;
        this.allowEmptyPallets = data.allowEmptyPallets;
        this.getToDetermineItemPosition = data.getToDetermineItemPosition;
        this.verifyCarrierIsEmpty = data.verifyCarrierIsEmpty;
        this.verifyByHandheld = data.verifyStoredUsingHandHeld;
        this.branch = await readBranchByID(data.branchID)
    }

    async isLegit() {
        return true;
    }
}