
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Sections from "./Sections";
import Product from "./Product";
import Gate from "./Gate";
import Device from "./Device";
import Store from "./Store";
import ScanProductHistory from "./ScanProductHistory";
import readHistoryByID from "../helpers/R/ByID/ReadHistoryByID";
import Tags from "./Tags";
import readTagByEPC from "../helpers/R/Custom/tagByEpc";

@Entity()
export default class Alerts {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: 'Tag Count/Error'
    })
    reason: string;

    @Column({
        default: 'error'
    })
    type: string;

    @Column({
        default: "error"
    })
    severity: string;

    @Column({
        default: 'sorted'
    })
    status: string;

    @Column({
        default: false
    })
    isResolved: boolean;

    @ManyToOne(type => Product, product => product.alerts)
    product: Product;

    @ManyToOne(type => Sections, section => section.alerts)
    sections: Sections;

    @ManyToOne(type => Store, store => store.alerts)
    store: Store;

    @ManyToOne(type => Gate, gate => gate.alerts)
    gate: Gate

    @ManyToOne(type => Device, device => device.alerts)
    device: Device

    @ManyToOne(type => ScanProductHistory, history => history.alerts)
    history: ScanProductHistory;

    @ManyToOne(type => Tags, tags => tags.alerts)
    tag: Tags

    async createItself(data: { severity: string; reason: string; type: string; }, tag: string) {
        this.severity = data.severity;
        this.reason = data.reason;
        this.type = data.type
        this.tag = await readTagByEPC(tag);
    }

}
