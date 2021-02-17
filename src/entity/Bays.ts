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
import Store from "./Store";
import Product from "./Product";
import Gate from "./Gate";
import Device from "./Device";

@Entity()
export default class Bays {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    role: string;

    @Column({
        nullable: true
    })
    hasErrors: boolean;

    @Column({
        nullable: true
    })
    isActive: boolean;

    @Column()
    storageType: string;

    @ManyToOne(type => Product, product => product.bay)
    product: Product;

    @ManyToMany(type => Gate, gate => gate.bays)
    gates: Gate[];

    @ManyToOne(type => Store, store => store.bays)
    store: Store;

    @OneToMany(type => Device, device => device.bays)
    @JoinTable()
    devices: Device[];
}