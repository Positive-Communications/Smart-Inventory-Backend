import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Product from "./Product";

@Entity()
export default class Pallet{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    count: number;

    @Column()
    type: string;

    @ManyToOne(()=>Product, product => product.pallet)
    product: Product;
}