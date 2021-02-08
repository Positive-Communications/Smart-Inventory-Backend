import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Branch from "./Branch";

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

    @Column()
    saturdayStart: string;

    @Column()
    saturdayEnd: string;

    @Column()
    sundayStart: string;

    @Column()
    sundayEnd: string;

    @OneToOne(type => Branch, branch=>branch.dispatchTimes)
    @JoinColumn()
    branch: Branch

}