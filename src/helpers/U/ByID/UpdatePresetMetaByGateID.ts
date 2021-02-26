import { getConnection } from "typeorm";
import PresetMeta from "../../../entity/PresetMeta";

const updatePresetByGate = async (gateID, data) => {

    try {
        return await
            getConnection()
                .createQueryBuilder()
                .update(PresetMeta)
                .where('gate.id =:id', { id: parseInt(gateID) })
                .set(data)
                .execute();
    } catch (e) { console.log(e); }
}

export default updatePresetByGate;