import {Column, PrimaryGeneratedColumn, Entity, OneToMany, JoinTable, ManyToOne, ManyToMany} from "typeorm";
import Alerts from "./Alerts";
import _Branch from "./_Branch";
import Items from "./Items";
import Gate from "./Gate";
import Device from "./Device";
import Bays from "./Bays";
import Product from "./Product";
import ScanProductHistory from "./ScanProductHistory";
import Presets from "./Presets";

@Entity()
export default class Sections {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role: string;

    @Column()
    name: string;

    @Column()
    capacity: number;

    @Column()
    hasErrors: boolean;


    @OneToMany(type => Product, product => product.currentSection)
    @JoinTable()
    currentProducts: Product[];

    @OneToMany(() => ScanProductHistory, scanHistory => scanHistory)
    @JoinTable()
    scanHistory: ScanProductHistory[];

    @OneToMany(type => Alerts, alerts => alerts.sections)
    @JoinTable()
    alerts: Alerts[];

    @ManyToOne(type => _Branch, branch => branch.sections)
    branch: _Branch;

    @OneToMany(type => Items, item => item.from)
    @JoinTable()
    itemsFrom: Items[];

    @OneToMany(type => Items, item => item.destination)
    @JoinTable()
    itemsTo: Items[];

    @OneToMany(type => Gate, gate => gate.accessTo)
    @JoinTable()
    gates: Gate[];

    @OneToMany(type => Device, device => device.accessTo)
    @JoinTable()
    devices: Device[];

    @OneToMany(type => Bays, bay => bay.sections)
    @JoinTable()
    bays: Bays[];

    @OneToMany(type => Presets, preset => preset.section)
    @JoinTable()
    presets: Presets[];
}

