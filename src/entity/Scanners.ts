import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Scanners {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    deviceType: string;

    @Column()
    role: string;

    // branch: string;
    //
    // section: string;
    //
    isHandHeld: boolean;

}