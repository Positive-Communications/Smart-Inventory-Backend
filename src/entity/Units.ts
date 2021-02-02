import {Column, PrimaryGeneratedColumn} from "typeorm";

export default class Units{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}