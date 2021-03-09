import {
    Column,
    Entity,
    JoinTable,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import Sections from "./Sections";
import PresetMeta from "./PresetMeta";


@Entity()
export default class Presets {
    
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Sections, section => section.presets)
    section: Sections;

    @Column()
    presetName: string;

    @OneToMany(type => PresetMeta, meta => meta.preset)
    @JoinTable()
    meta: PresetMeta[];

}
