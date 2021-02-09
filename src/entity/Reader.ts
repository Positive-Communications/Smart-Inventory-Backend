import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Reader{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numberOfAnts: number;

    @Column()
    outGoingAnt: string;

    @Column()
    incomingAnt: string;

    @Column()
    ant1Power: string;

    @Column()
    ant2Power: string;

    @Column()
    ant3Power: string;

    @Column()
    ant4Power: string;

}