import { getConnection } from "typeorm";
import PresetMeta from "../../../entity/PresetMeta";

const addPresetMeta = async (data: any) => {

    let meta = new PresetMeta();
    await meta.createItself(data);

    try {

        return await
            getConnection().manager.save(meta);

    } catch (e) {
        console.log(e);
    }

}
export default addPresetMeta;