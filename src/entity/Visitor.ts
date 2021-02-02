import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Gate from "./Gate";

@Entity()
export default class Visitor{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    identificationType: string;

    @Column()
    identificationNumber: string;

    @Column()
    username: string;

    @Column()
    identificationPhoto: string;

    @Column()
    company: string;

    @Column()
    designation :string;

    @Column()
    phone: string;

    @Column()
    number: string;

    @Column()
    email: string;

    @ManyToOne(()=>Gate, gate=>gate.visitorAccess)
    accessGates: Gate
}