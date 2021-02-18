import Presets from "../../../entity/Presets";
import readProductByID from "../../R/ByID/ReadProductByID";
import {getConnection} from "typeorm";
import getOrCreateSection from "../Custom/GetOrCreateSection";

export default async function savePresets(data) {

    let preset = new Presets();

    preset.section = await getOrCreateSection(data.section);
    preset.presetName = data.presetName;

    try {

        return await
            getConnection().manager.save(preset);

    } catch (e) {
        console.log(e)
    }


}

let json = {
    section: "",
    presetName: "",
}