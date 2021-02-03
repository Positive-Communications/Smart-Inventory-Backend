import {Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Sections from "./Sections";


@Entity()
export default class Presets {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Sections, section => section.presets)
    @JoinColumn()
    section: Sections;

    @Column()
    presetName: string;

    // @OneToOne(type => Product, product => product.preset)
    // product: Product;
}