import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Items {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    carrierStatus: string;

    @Column()
    status: string;

    @Column()
    type: string;

    @Column()
    manualEntry: boolean;

    @Column()
    pallet: string;

    @Column()
    tag: string;

    @Column()
    quantity: number;

    @Column()
    carrierNumber: string;

    @Column()
    expiry: string;

    @Column()
    dateTime: string;
}