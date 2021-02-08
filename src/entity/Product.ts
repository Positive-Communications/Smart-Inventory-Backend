import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";

import ProductUnit from "./ProductUnit";
import Pallet from "./Pallet";
import Gate from "./Gate";
import ScanProductHistory from "./ScanProductHistory";
import Sections from "./Sections";
import ManualEntry from "./ManualEntry";
import Presets from "./Presets";
import ProductTags from "./ProductTags";
import Store from "./Store";
import Bays from "./Bays";

@Entity()
export default class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    status: string;

    @Column()
    expiry: string;

    @Column()
    monthsLeftToExpire: string;

    @Column()
    hasErrors: false;

    @Column()
    isStoredOnPallet: boolean;

    @Column()
    palletIsTrackedByRFID: boolean;

    @ManyToOne(type => ProductUnit, unit => unit.product)
    unit: ProductUnit;

    @OneToMany(type => Gate, gate => gate.dispatchedProducts)
    @JoinTable()
    dispatchGate: Gate;


    @OneToOne(type => ProductTags, tag => tag.product)
    @JoinColumn()
    tag: ProductTags


    @OneToOne(type => Presets, preset => preset.product)
    @JoinColumn()
    preset: Presets

    @OneToMany(type => Pallet, pallet => pallet.product)
    @JoinTable()
    pallet: Pallet[];

    @OneToMany(type => ScanProductHistory, scanHistory => scanHistory.product)
    @JoinTable()
    scanHistory: ScanProductHistory;

    @ManyToOne(type => Sections, section => section.currentProducts)
    currentSection: Sections;

    @ManyToMany(type=> Bays, bay=>bay.product)
    bay: Bays[]

    @ManyToOne(type => Store, store => store.product)
    storedIn: Store

    @OneToMany(type => ManualEntry, manualEntry => manualEntry.product)
    @JoinTable()
    manualEntries: ManualEntry[];

}