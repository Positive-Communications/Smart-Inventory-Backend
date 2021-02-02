import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Alerts from "./Alerts";

@Entity()
export default class PackagingSection {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @OneToMany(()=>Alerts, )

    alerts: string;


}