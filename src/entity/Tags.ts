import { Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Alerts from "./Alerts";
import Carrier from "./Carrier";
import Pallet from "./Pallet";
import Product from "./Product";
import ScanProductHistory from "./ScanProductHistory";

@Entity()
class Tags {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    epc: string;

    @Column({
        default: false
    })
    hasErrors: boolean;

    @Column({
        default: "empty"
    })
    status: string;

    @Column({
        default: false
    })
    isAssigned: boolean;

    @Column({
        default: false
    })
    isProductTag: boolean;

    @Column({
        default: false
    })
    isPalletTag: boolean;

    @Column({
        default: false
    })
    isCarrierTag: boolean;

    @OneToMany(type => ScanProductHistory, history => history.tag)
    @JoinTable()
    history: ScanProductHistory[];

    @OneToOne(type => Product, product => product.tag)
    product: Product

    @OneToOne(type => Pallet, pallet => pallet.tag)
    @JoinColumn()
    pallet: Pallet;

    @OneToOne(type => Carrier, carrier => carrier.tag)
    @JoinColumn()
    carrier: Carrier;

    async createItself(data: string) {
        this.epc = data
    }

}


export default Tags;