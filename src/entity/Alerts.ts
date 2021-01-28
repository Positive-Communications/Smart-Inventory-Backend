import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Items from "./Items";

@Entity()
export default class Alerts{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    type: string;

    @ManyToOne(type => Items,  item => item.alerts)
    item: Items;
}
