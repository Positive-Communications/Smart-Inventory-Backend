import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToOne} from 'typeorm';
import Alerts from "./Alerts";
import Sections from "./Sections";
import Company from "./Company";

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

    @OneToMany(type => Sections, section => section.branch)
    @JoinTable()
    sections: Sections[]

    @ManyToOne(() => Company, company => company.branches)
    company: Company
}

