import { AfterInsert, AfterUpdate, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import readCarrierById from "../helpers/R/ByID/ReadCarrierByID";
import readGateByID from "../helpers/R/ByID/ReadGateByID";
import assignProductToTag from "../helpers/R/Custom/ReadProductByPreset";
import readTagByEPC from "../helpers/R/Custom/tagByEpc";
import updateTagByID from "../helpers/U/ByID/UpdateTagByID";
import Alerts from "./Alerts";
import Carrier from "./Carrier";
import Gate from "./Gate";
import Pallet from "./Pallet";
import Tags from "./Tags";

@Entity()
export default class ScanProductHistory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timeStamp: string;

    @Column({
        default: false
    })
    isReadByHandHeld: boolean;

    // @ManyToOne(type=>Product, product=>produt.history)
    // @

    @ManyToOne(() => Gate, gate => gate.scanHistory)
    gate: Gate;

    @ManyToOne(() => Pallet, pallet => pallet.history)
    pallet: Pallet;

    @ManyToOne(() => Carrier, carrier => carrier.palletHistory)
    carrier: Carrier;

    @ManyToOne(() => Tags, tags => tags.history)
    tag: Tags

    @OneToMany(() => Alerts, alerts => alerts.history)
    @JoinTable()
    alerts: Alerts[];


    async createItself(data: { gateID: number; tagEpc: string; status: string , carrier: number}) {
        this.timeStamp = new Date().getTime().toString();
        this.gate = await readGateByID(data.gateID);
        this.tag = await readTagByEPC(data.tagEpc);
        this.carrier = await readCarrierById(data.carrier)
    }

    @AfterInsert()
    updated() {
        if (this.gate.isForPackaging && this.tag.status === 'empty') {
           updateTagByID({status: "packed", tagID: this.tag.id});
        }
    }


}
