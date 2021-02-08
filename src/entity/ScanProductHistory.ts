import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Product from "./Product";
import Gate from "./Gate";
import Device from "./Device";

@Entity()
export default class ScanProductHistory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timeStamp: string;

    @Column()
    isReadByHandHeld: boolean;

    @OneToMany(()=>Gate, gate=>gate.scanHistory)
    gate: Gate;

    @OneToMany(()=>Device, device=>device.history)
    device: Device;

    @OneToMany(() => Product, product => product.scanHistory)
    product: Product


}