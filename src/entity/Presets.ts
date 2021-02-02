import {Column, Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Sections from "./Sections";
import Product from "./Product";

@Entity()
export default class Presets {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Sections, section => section.presets)
    section: Sections;

    @Column()
    presetName: string;

    @OneToOne(type => Product, product => product.preset)
    product: Product;
}