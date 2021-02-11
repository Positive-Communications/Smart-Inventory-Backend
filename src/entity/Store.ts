import {Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Bays from "./Bays";
import Branch from "./Branch";
import Product from "./Product";

@Entity()
export default class Store {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Branch, branch => branch.stores)
    branch: Branch;

    @OneToMany(() => Bays, bay => bay.store)
    @JoinTable()
    bays: Bays[]

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
        nullable: true
    })
    isActive: boolean;

    @Column({
        nullable: true
    })
    hasErrors: boolean;

    @OneToMany(type => Product, product => product.storedIn)
    @JoinTable()
    product: Product[];

}