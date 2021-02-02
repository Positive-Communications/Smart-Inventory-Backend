import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Product from "./Product";
import Carrier from "./Carrier";

@Entity()
export default class ManualEntry {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Product, product => product.manualEntries)
    product: Product;

    @ManyToOne(type => Carrier, carrier => carrier.manualEntry)
    carrier: Carrier;

}