import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Alerts from "./Alerts";
import Bays from "./Bays";
import Branch from "./Branch";
import Gate from "./Gate";
import Product from "./Product";

@Entity()
export default class Store {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Branch, branch => branch.stores)
    branch: Branch;

    @OneToMany(() => Bays, bay => bay.store)
    @JoinTable()
    bays: Bays[];

    @Column()
    number: string;

    @Column({
        nullable: true
    })
    map: string;

    @Column({
        nullable: true
    })
    storageType: string;

    @Column({
        default: true,
    })
    active: boolean;

    @Column({
        nullable: true
    })
    hasErrors: boolean;

    @OneToMany(type => Alerts, alert => alert.store)
    @JoinTable()
    alerts: Alerts[];


    @OneToMany(type => Product, product => product.storedIn)
    @JoinTable()
    product: Product[];

    @OneToMany(type => Gate, gate => gate.stores)
    @JoinTable()
    gates: Gate[];

    async createItself(name) {
        this.number = name;
    }

}