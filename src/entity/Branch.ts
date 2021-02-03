import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToOne} from 'typeorm';
import Alerts from "./Alerts";
import Sections from "./Sections";
import Company from "./Company";
import Gate from "./Gate";

@Entity()
export default class Branch {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    info: string;

    @Column()
    city: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    streetRoad: string;

    @Column()
    isActive: boolean;

    @OneToMany(type => Gate, gate => gate.branch)
    @JoinTable()
    gates: Gate[]

    @ManyToOne(type => Company, company => company.branches)
    company: Company

    @OneToMany(type=>Sections, section=>section.branch)
    @JoinTable()
    sections: Branch[];
}

