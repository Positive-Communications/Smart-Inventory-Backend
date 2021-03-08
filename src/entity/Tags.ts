import { AfterUpdate, Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import readCompanyByID from "../helpers/R/ByID/ReadCompanyByID";
import Alerts from "./Alerts";
import Carrier from "./Carrier";
import Company from "./Company";
import Move from "./Move";
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

    @OneToMany(type => Alerts, alerts => alerts.tag)
    @JoinTable()
    alerts: Alerts[];

    @OneToMany(type => ScanProductHistory, history => history.tag)
    @JoinTable()
    history: ScanProductHistory[];
    
    @ManyToOne(type => Product, product => product.tags)
    product: Product

    @OneToOne(type => Pallet, pallet => pallet.tag)
    @JoinColumn()
    pallet: Pallet;

    @OneToOne(type => Carrier, carrier => carrier.tag)
    @JoinColumn()
    carrier: Carrier;

    @ManyToOne(type => Company, company => company.tags)
    company: Company;

    @ManyToOne(type =>Move, move => move.tags)
    moves: Move;

    async createItself(epc, id) {
        this.epc = epc
        this.company = await readCompanyByID(id)
    }

    @AfterUpdate()
    update() {
        console.log('====================================');
        console.log("i updated");
        console.log('====================================');
    }

}


export default Tags;