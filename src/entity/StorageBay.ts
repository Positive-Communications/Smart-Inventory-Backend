import {Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Bays from "./Bays";

@Entity()
export default class StorageBay {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Bays, bay => bay.sections)
    @JoinTable()
    bays: Bays[]

    @Column()
    bayCode: string;

    @Column()
    map: string;

    @Column()
    storageType: string;

    @Column()
    isActive: boolean;

    @Column()
    hasErrors: boolean;

}