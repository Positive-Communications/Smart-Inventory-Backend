import {Column, PrimaryGeneratedColumn, Entity} from "typeorm";

@Entity()
export default class GeneralItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    date: string;

    @Column()
    expiry: string;
}