import {getConnection} from "typeorm";
import Presets from "../../../entity/Presets";

export default async function readPresetByID(presetID) {

    return await
        getConnection()
            .manager.findOne(Presets, parseInt(presetID));
}