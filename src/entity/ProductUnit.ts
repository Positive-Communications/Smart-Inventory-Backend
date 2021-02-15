import {Column, Entity, JoinTable,  ManyToMany,  ManyToOne,  OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Product from "./Product";
import OrderQue from "./OrderQue";
import OrderDetails from "./OrderDetails";
import Unit from "./Units";
import readUnitByID from "../helpers/R/ByID/ReadUnitByID";

@Entity()
export default class ProductUnit {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type=>Unit, unit=> unit.pUnit)
    unit: Unit;

    @Column()
    numberOfProducts: number;

    @Column()
    isTrackedByRFID: boolean;

    @Column()
    useUnitAsDefault: boolean;

    @ManyToOne(()=>Product, product => product.units)
    product: Product

    @OneToMany(type=>OrderDetails, orders=>orders.unit)
    @JoinTable()
    orderDetails: OrderDetails;

    async createItself (data){  
        this.unit =await readUnitByID(data.unit.id);
        this.numberOfProducts = data.count;
        this.isTrackedByRFID = data.isTracked;
        this.useUnitAsDefault = data.default;
    }


}