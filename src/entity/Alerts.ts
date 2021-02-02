import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Items from "./Items";
import Sections from "./Sections";
import Product from "./Product";
import Gate from "./Gate";
import Device from "./Device";

@Entity()
export default class Alerts{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    type: string;

    @Column()
    severity: string;

    @ManyToOne(type => Sections,  section => section.alerts)
    sections: Sections;

    @ManyToMany(type=>    Product, product=>product.alerts)
    @JoinTable()
    forProducts: Items[];

    @ManyToOne(type=>Gate, gate=>gate.alerts)
    gate: Gate

    @ManyToOne(type=>Device, device=>device.alerts)
    device: Device
}
