import {
    Column, PrimaryGeneratedColumn,
    Entity, OneToMany, JoinTable,
    ManyToOne, OneToOne
} from "typeorm";

import Alerts from "./Alerts";
import Gate from "./Gate";
import Device from "./Device";
import Product from "./Product";
import Presets from "./Presets";
import Branch from "./Branch";

@Entity()
export default class Sections {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    role: string;

    @Column()
    name: string;

    @Column({
        default: 0
    })
    capacity: number;

    @Column({
        default: false
    })
    hasErrors: boolean;

    @ManyToOne(type => Branch, branch => branch.sections)
    branch: Branch

    @OneToMany(type => Presets, preset => preset.section)
    @JoinTable()
    presets: Presets[];

    @OneToMany(type => Product, product => product.currentSection)
    @JoinTable()
    currentProducts: Product[];

    @OneToMany(type => Alerts, alerts => alerts.sections)
    @JoinTable()
    alerts: Alerts[];


    @OneToMany(type => Gate, gate => gate.sections)
    @JoinTable()
    gates: Gate[];


    @OneToMany(type => Device, device => device.sections)
    @JoinTable()
    devices: Device[];


}

