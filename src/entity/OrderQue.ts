import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Branch from "./Branch";

@Entity()
export default class OrderQue{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vehicleCanEnterPremisesWhenRemaining: number;

    @Column()
    vehicleWillBePreparedAndRemainOnStandBy: number;

    @OneToOne(type => Branch, branch=> branch.orderQue)
    @JoinColumn()
    branch: Branch;
}