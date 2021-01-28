import {Column, PrimaryGeneratedColumn, Entity} from "typeorm";

@Entity()
export default class UnitArea {

    @PrimaryGeneratedColumn()
    id: number;

}

