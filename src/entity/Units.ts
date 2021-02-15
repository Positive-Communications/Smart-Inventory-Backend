import { Column, Entity, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import frisk from "../Auth/middleware";
import Pallet from "./Pallet";
import ProductUnit from "./ProductUnit";


@Entity()
class Unit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @OneToMany(type=> ProductUnit, pUnit=>pUnit.unit)
    @JoinTable()
    pUnit: ProductUnit[];

    @OneToMany(type=>Pallet, pallet=> pallet.unit)
    @JoinTable()
    pallets: Pallet[]


    async createItself(data){
        this.name = data.name
    }

}

export default Unit;
