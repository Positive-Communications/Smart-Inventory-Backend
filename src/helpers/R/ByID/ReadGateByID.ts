import {getConnection} from "typeorm";
import Gate from "../../../entity/Gate";

export default async function readGateByID(gateID: number) {


    return await
        getConnection().manager.findOne(Gate,gateID, {relations: ["presetMeta", "presetMeta.product", "presetMeta.preset", "presetMeta.preset.section"]});
}