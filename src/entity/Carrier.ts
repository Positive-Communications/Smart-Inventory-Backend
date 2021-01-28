import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Carrier {

    @PrimaryGeneratedColumn()
    id: number;
}