import {Column, PrimaryGeneratedColumn, Entity, OneToMany, JoinTable, ManyToOne, ManyToMany, OneToOne} from "typeorm";
import Alerts from "./Alerts";
import Items from "./Items";
import Gate from "./Gate";
import Device from "./Device";
import Bays from "./Bays";
import Product from "./Product";
import ScanProductHistory from "./ScanProductHistory";
import Presets from "./Presets";
import Branch from "./Branch";

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

    @OneToMany(type => Items, item => item.from)
    @JoinTable()
    itemsFrom: Items[];

    @OneToMany(type => Items, item => item.destination)
    @JoinTable()
    itemsTo: Items[];

    @OneToMany(type => Gate, gate => gate.accessTo)
    @JoinTable()
    gates: Gate[];

    @ManyToOne(type=> Branch, branch=>branch.sections)
    branch: Branch

    @OneToMany(type => Device, device => device.accessTo)
    @JoinTable()
    devices: Device[];

    @OneToMany(type => Bays, bay => bay.sections)
    @JoinTable()
    bays: Bays[];

    @OneToOne(type => Presets, preset => preset.section)
    presets: Presets;
}

