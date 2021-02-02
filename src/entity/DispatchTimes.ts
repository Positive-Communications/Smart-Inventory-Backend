import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class DispatchTimes{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    monday: boolean;

    @Column()
    tuesday: boolean;

    @Column()
    wednesday: boolean;

    @Column()
    thursday: boolean;

    @Column()
    friday: boolean;

    @Column()
    saturday: boolean;

    @Column()
    sunday: boolean;

    @Column()
    startTime: string;

    @Column()
    endTime: string;

}