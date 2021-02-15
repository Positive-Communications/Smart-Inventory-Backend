import {Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import readUnitByID from "../helpers/R/ByID/ReadUnitByID";
import Product from "./Product";
import Unit from "./Units";

@Entity()
export default class Pallet{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    count: number;

    @Column()
    type: string;

    @ManyToOne(type=> Unit, unit=> unit.pallets)
    unit: Unit;

    @ManyToOne(()=>Product, product => product.pallet)
    product: Product;

    async createItself (data) {
        this.count = data.count,
        this.type = data.palletType;
        this.unit = await readUnitByID(data.unit.id);
    }
}