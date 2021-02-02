import {Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
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

    @ManyToOne(()=>Product, product => product.units)
    product: Product

}