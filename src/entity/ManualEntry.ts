import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Product from "./Product";
import Carrier from "./Carrier";
import readProductByID from "../helpers/R/ByID/ReadProductByID";
import readCarrierById from "../helpers/R/ByID/ReadCarrierByID";

@Entity()
export default class ManualEntry {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Product, product => product.manualEntries)
    product: Product;

    @ManyToOne(type => Carrier, carrier => carrier.manualEntry)
    carrier: Carrier;

    async createItself (data){
        this.product = await readProductByID(data.ProductID);
        this.carrier = await readCarrierById(data.carrierID);
    }

}