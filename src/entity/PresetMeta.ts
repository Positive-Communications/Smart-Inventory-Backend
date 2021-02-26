import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import readGateByID from "../helpers/R/ByID/ReadGateByID";
import readPresetByID from "../helpers/R/ByID/ReadPresetByID";
import readProductByID from "../helpers/R/ByID/ReadProductByID";
import GateManager from "../resource.manager/gate.manager";
import Gate from "./Gate";
import Presets from "./Presets";
import Product from "./Product";


let gateManager = new GateManager();

@Entity()
class PresetMeta {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: "01/07/2021",
        nullable: true
    })
    expiry: string

    @Column({
        default: "isProductTag",
        nullable: true
    })
    trackRFIDTagType: string;

    @Column({
        default: "plastic",
        nullable: true
    })
    palletType: string

    @ManyToOne(type => Presets, preset => preset.meta)
    preset: Presets;

    @ManyToOne(type => Product, product => product.meta)
    product: Product

    @OneToOne(type => Gate, gate => gate.presetMeta)
    gate: Gate;

    async createItself(data: { preset: any; expiry: string; trackRFIDTagType: string; palletType: string; product: { id: any; }; gateID: any; }) {
        this.preset = await readPresetByID(data.preset) || null;
        this.expiry = data.expiry;
        this.trackRFIDTagType = data.trackRFIDTagType;
        this.palletType = data.palletType;
        this.product = await readProductByID(data.product.id);
        this.gate = await gateManager.readGate(data.gateID) 
    }
}

export default PresetMeta;

let json = {
    preset: "",
    expiry:"",
    trackRFIDTagType:"",
    palletType:"",
    product:"",
    gateID: ""
}


