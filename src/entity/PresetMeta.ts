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
    })
    expiry: string

    @Column({
        default: "productTag",
    })
    trackRFIDTagType: string;

    @Column({
        default: "empty",
    })
    palletType: string

    @ManyToOne(type => Presets, preset => preset.meta)
    preset: Presets;

    @ManyToOne(type => Product, product => product.meta)
    product: Product

    @OneToOne(type => Gate, gate => gate.presetMeta)
    gate: Gate;

    async createItself(data: { presetID: any; expiry: string; trackRFIDTagType: string; palletType: string; product: any; gateID: any; }) {
        this.preset = await readPresetByID(data.presetID);
        this.expiry = data.expiry || "2021-05-2021";
        this.trackRFIDTagType = data.trackRFIDTagType || "productTagOnly";
        this.palletType = data.palletType || "empty";
        this.product = await readProductByID(data.product);
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


