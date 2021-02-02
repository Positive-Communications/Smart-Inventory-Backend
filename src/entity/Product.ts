import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import ProductUnit from "./ProductUnit";
import Pallet from "./Pallet";
import Gate from "./Gate";
import Items from "./Items";
import Alerts from "./Alerts";
import ScanProductHistory from "./ScanProductHistory";
import {type} from "os";
import Sections from "./Sections";
import ManualEntry from "./ManualEntry";
import Presets from "./Presets";
import ProductTags from "./ProductTags";

@Entity()
export default class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameTitle: string;

    @Column()
    description: string;

    @Column()
    expiry: string;

    @Column()
    date: string;

    @Column()
    displayAs: string;

    @Column()
    monthsLeftToExpiry: number;


    @Column()
    isPallet: boolean;

    @Column()
    isTrackedByRFID: boolean;

    @Column()
    category: string;

    @Column()
    withRFIDTag: boolean;


    @OneToOne(type => ProductTags, tag => tag.product)
    @JoinTable()
    tag: ProductTags


    @OneToOne(type => Presets, preset => preset.product)
    @JoinTable()
    preset: Presets


    @OneToMany(type => ProductUnit, unit => unit.product)
    @JoinTable()
    units: ProductUnit[]

    @OneToMany(type => Pallet, pallet => pallet.product)
    @JoinTable()
    pallet: Pallet[];

    @OneToMany(type => Gate, gate => gate.dispatchedProducts)
    @JoinTable()
    dispatchGate: Gate;

    @OneToMany(type => Alerts, alert => alert.forProducts)
    @JoinTable()
    alerts: Alerts[];

    @OneToMany(type => ScanProductHistory, scanHistory => scanHistory.product)
    @JoinTable()
    scanHistory: ScanProductHistory;

    @ManyToOne(type => Sections, section => section.currentProducts)
    currentSection: Sections;

    @OneToMany(type => ManualEntry, manualEntry => manualEntry.product)
    @JoinTable()
    manualEntries: ManualEntry[];

}