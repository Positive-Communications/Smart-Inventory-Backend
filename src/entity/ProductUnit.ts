import {Column, Entity, JoinTable,  OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Product from "./Product";

@Entity()
export default class ProductUnit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unit: string;

    @Column()
    numberOfProducts: number;

    @Column()
    isTrackedByRFID: boolean;

    @Column()
    useUnitAsDefault: boolean;

    @OneToMany(()=>Product, product => product.unit)
    @JoinTable()
    product: Product

}