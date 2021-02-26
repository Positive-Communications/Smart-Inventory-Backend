import { AfterInsert, Column, Entity, getConnection, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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
import Store from "./Store";
import PresetMeta from "./PresetMeta";


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


    @Column({
        default: true
    })
    isActive: boolean;

    @Column({
        default: false
    })
    isForPackaging: boolean;

    @Column({
        default: false
    })
    isForStorage: boolean;

    @Column({
        default: false
    })
    isForDispatch: boolean;

    @Column()
    role: string;

    @Column({
        nullable: true,
    })
    hasErrors: boolean;

    @Column({
        nullable: true,
    })
    isaActive: boolean;

    @Column({
        nullable: true,
    })
    allowManual: boolean;

    @Column({
        nullable: true,
    })
    allowEmpty: boolean;

    @Column({
        nullable: true,
    })
    verifyByHandheld: boolean;

    @Column({
        nullable: true,
    })
    verifyNotTrackedByRFID: boolean;

    @Column({
        nullable: true,
    })
    checkContinuouslyForUnauthorized: boolean;

    @Column({
        nullable: true,
    })
    doNotAllowRemoved: boolean;

    @Column({
        nullable: true,
    })
    useForDispatchOrReceiving: boolean;

    @Column({
        nullable: true,
    })
    allowDispatchForAllOrders: boolean;

    @Column({
        nullable: true,
    })
    showProductCountError: boolean;

    @Column({
        nullable: true,
    })
    allowEmptyPallets: boolean;

    @Column({
        nullable: true
    })
    getToDetermineItemPosition: boolean;

    @Column({
        nullable: true,
    })
    verifyCarrierIsEmpty: boolean;

    @OneToOne(() => PresetMeta, meta => meta.gate)
    @JoinColumn()
    presetMeta: PresetMeta

    @ManyToOne(() => PackingTags, parking => parking.accessGates)
    parkingAccess: PackingTags;

    @ManyToOne(() => Branch, branch => branch.gates)
    branch: Branch;

    @OneToMany(() => VisitorAccessTags, visitor => visitor.entryGate)
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

    @OneToMany(() => VisitorAccessTags, visitor => visitor.exitGate)
    @JoinTable()
    visitorExit: VisitorAccessTags[]

    @ManyToOne(() => Product, product => product.dispatchGate)
    dispatchedProducts: Product;

    @OneToMany(() => ScanProductHistory, history => history.gate)
    @JoinTable()
    scanHistory: ScanProductHistory[];

    @OneToMany(() => Alerts, alerts => alerts.gate)
    @JoinTable()
    alerts: [];

    @ManyToMany(() => Sections, section => section.gates)
    sections: Sections[];

    @ManyToMany(() => Bays, bays => bays.gates)
    @JoinTable()
    bays: Bays[];

    @ManyToOne(() => VisitorAccessTags, visitor => visitor.accessGates)
    visitors: VisitorAccessTags[]

    @ManyToOne(() => Store, store => store.gates)
    stores: Store

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
        this.branch = await readBranchByID(data.branchID)
    }

    async isLegit() {
        return true;
    }

    @AfterInsert()
    async createPresetMetadata() {
       await  addPresetMeta(this.id)
    }

}



const addPresetMeta = async (id: number) => {
    console.log("Adding Meta to gate cmes here");
    
}