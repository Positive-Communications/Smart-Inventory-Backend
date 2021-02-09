import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Product from "./Product";
import ProductUnit from "./ProductUnit";
import Orders from "./Orders";
import readProductByID from "../helpers/R/ByID/ReadProductByID";
import readProductUnitByID from "../helpers/R/ByID/ReadProductUnitByID";

@Entity()
export default class OrderDetails {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Product, product => product.orderDetails)
    product: Product;

    @Column()
    quantity: string;

    @ManyToOne(type => ProductUnit, unit => unit.orderDetails)
    unit: ProductUnit;

    @ManyToOne(type => Orders, orders => orders.orderDetails)
    order: Orders;

    async createItself(data) {
        this.product = await readProductByID(data.productID);
        this.quantity = data.quantity;
        this.unit = await readProductUnitByID(data.productUnitID);
    }

    async isLegit() {
        return true;
    }

}
