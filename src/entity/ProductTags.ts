import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Product from "./Product";

@Entity()
export default class ProductTags {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    epc: string;

    @Column()
    tid: string;

    @Column()
    type: string;

    @OneToOne(type=>Product, product => product.tag)
    product:Product

}