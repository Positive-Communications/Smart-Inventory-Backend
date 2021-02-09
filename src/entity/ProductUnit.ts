import {Column, Entity, JoinTable,  OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Product from "./Product";
import OrderQue from "./OrderQue";
import OrderDetails from "./OrderDetails";

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

    @OneToMany(type=>OrderDetails, orders=>orders.unit)
    @JoinTable()
    orderDetails: OrderDetails;

}