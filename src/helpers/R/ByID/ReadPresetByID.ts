import {getConnection} from "typeorm";
import Presets from "../../../entity/Presets";

export default async function readPresetByID(presetID) {

    return await
        getConnection()
            .createQueryBuilder()
            .select('preset')
            .from(Presets, 'preset')
            .where('preset.id =:id', {id: parseInt(presetID)})
            .getOne();
}