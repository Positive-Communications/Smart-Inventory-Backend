import {
    AfterInsert,
    Column,
    Entity,
    getConnection,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";

import ProductUnit from "./ProductUnit";
import Pallet from "./Pallet";
import Gate from "./Gate";
import ScanProductHistory from "./ScanProductHistory";
import Sections from "./Sections";
import ManualEntry from "./ManualEntry";
import ProductTags from "./Tags";
import Store from "./Store";
import Bays from "./Bays";
import OrderDetails from "./OrderDetails";
import saveMultipleProductUnits from "../helpers/C/Multiple/SaveMultipleProductUnits";
import saveMultiplePallets from "../helpers/C/Multiple/SaveMultiplePallets";
import assignGateToProduct from "../helpers/C/Multiple/AssignGateToProduct";
import PresetMeta from "./PresetMeta";
import assignRandomTag from "../helpers/U/Custom/AssignRandomTag";
import Tags from "./Tags";
import Alerts from "./Alerts";

@Entity()
export default class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({
        nullable: true
    })
    status: string;

    @Column()
    expiry: string;

    @Column()
    monthsLeftToExpire: string;

    @Column()
    hasErrors: false;

    @Column({
        nullable: true
    })
    isStoredOnPallet: boolean;

    @Column({
        nullable: true
    })
    palletIsTrackedByRFID: boolean;

    @OneToMany(type=>Alerts, alert=>alert.product)
    @JoinTable()
    alerts: Alerts[];

    @OneToMany(type => ProductUnit, unit => unit.product)
    @JoinTable()
    units: ProductUnit[];

    @OneToMany(type => Gate, gate => gate.dispatchedProducts)
    @JoinTable()
    dispatchGate: Gate[];


    @OneToOne(type => ProductTags, tag => tag.product)
    @JoinColumn()
    tag: ProductTags;


    @OneToMany(type => PresetMeta, meta => meta.product)
    @JoinColumn()
    meta: PresetMeta;

    @OneToMany(type => Pallet, pallet => pallet.product)
    @JoinTable()
    pallet: Pallet[];


    @ManyToOne(type => Sections, section => section.currentProducts)
    currentSection: Sections;

    @OneToMany(type => Bays, bay => bay.product)
    @JoinTable()
    bay: Bays[]

    @ManyToOne(type => Store, store => store.product)
    storedIn: Store

    @OneToMany(type => ManualEntry, manualEntry => manualEntry.product)
    @JoinTable()
    manualEntries: ManualEntry[];

    @OneToMany(type => OrderDetails, details => details.product)
    @JoinTable()
    orderDetails: OrderDetails[];


    async createItself(data) {

        this.name = data.name;
        this.description = data.description;
        this.status = data.status;
        this.expiry = data.expiry;
        this.monthsLeftToExpire = data.monthsLeftToExpire;
        this.hasErrors = data.hasErrors;
        this.units = await saveMultipleProductUnits(data.units)
        this.dispatchGate = await assignGateToProduct(data.gates);
        this.isStoredOnPallet = data.isStoredOnPallet;
        this.palletIsTrackedByRFID = data.palleptIsTrackedByRFID;
        this.pallet = await saveMultiplePallets(data.pallets);
        this.tag = await assignRandomTag();
    }

    async isLegit() {
        return true;
    }


    @AfterInsert()
    updateTagInfo = async () => {
        await updateAssignedTag(this.tag)        
    }

}

const updateAssignedTag = async (tag: ProductTags) => {
    let ptag = await getConnection()
        .createQueryBuilder()
        .update(Tags)
        .where('id =:id', { id: tag.id })
        .set({
            isProductTag: true,
            isAssigned: true,
        })
        .execute();
}

