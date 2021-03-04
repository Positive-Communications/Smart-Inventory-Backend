import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({
        default: false
    })
    isOpenQuantity: boolean;

    @ManyToOne(type => ProductUnit, unit => unit.orderDetails)
    unit: ProductUnit;

    @ManyToOne(type => Orders, orders => orders.orderDetails)
    order: Orders;

    async createItself(data: { product: { id: any; }; isOpenQuantity: boolean; quantity: string; unit: { id: any; }; }) {
        this.product = await readProductByID(data.product.id);
        data.isOpenQuantity = data.isOpenQuantity || false;
        this.quantity = data.quantity;
        this.unit = await readProductUnitByID(data.unit.id);
    }

    async isLegit() {
        return true;
    }

}

