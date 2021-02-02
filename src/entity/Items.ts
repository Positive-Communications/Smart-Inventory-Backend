import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Sections from "./Sections";
import Carrier from "./Carrier";

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
    alertActive: number;

    @Column()
    hasRFIDTag: boolean;

    @Column()
    dateTime: string;

    @Column()
    hasErrors: boolean;

    @ManyToOne(() => Sections, section => section.itemsFrom)
    from: Sections

    @ManyToOne(() => Sections, section => section.itemsTo)
    destination: Sections

    @ManyToOne(() => Carrier, carrier => carrier.items)
    carrier: Carrier

}
