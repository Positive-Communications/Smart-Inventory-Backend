import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Gate from "./Gate";

@Entity()
export default class TemporaryStaff {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    identificationType: string;

    @Column()
    identificationNumber: number;

    @Column()
    identificationPhoto: string;

    @Column()
    userPhoto: string;

    @Column()
    workDescription: string;

    @Column()
    isCarrier: boolean;

    @Column()
    phone: string;

    @Column()
    mobile: string;

    @Column()
    email: String;

    @Column()
    expiry: string;
    //
    // @ManyToOne(()=>Sections, section=>section.allowedUsers)
    // @JoinTable()

    @ManyToOne(() => Gate, gate => gate.temporaryEntryPoint)
    entryGate: Gate

    @ManyToOne(() =>Gate,  gate => gate.temporaryExit)
    exitGate: Gate

    @Column()
    lunchBreak: string;

    @Column()
    lunchBreakStarts: string;

    @Column()
    workHours: string;

    @Column()
    reportingTimeMorning: string;

    @Column()
    reportingTimeAfternoon: string;

}