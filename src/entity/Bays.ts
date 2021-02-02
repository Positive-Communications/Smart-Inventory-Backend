import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Sections from "./Sections";

@Entity()
export default class Bays {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    role: string;

    @Column()
    isActive: boolean;

    @ManyToOne(()=>Sections, section=>section.bays)
    sections: Sections;
}