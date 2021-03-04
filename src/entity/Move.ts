import { ManyToOne } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import Carrier from "./Carrier";
import Product from "./Product";

@Entity()
export default class Move {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fromID: number;

    @Column()
    toID: number;

    @Column()
    fromType: string;

    @Column()
    toType: string;

    @Column()
    timeStamp: string;

    @ManyToOne(type => Carrier, carrier => carrier.toMove)
    carrier: Carrier

    // @OneToMany(type=> Product, product => product.toMove)



}