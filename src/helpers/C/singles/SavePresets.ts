import Presets from "../../../entity/Presets";
import readSectionByID from "../../R/ByID/ReadSectionByID";
import readProductByID from "../../R/ByID/ReadProductByID";
import {getConnection} from "typeorm";

export default async function savePresets(data) {

    let preset = new Presets();

    preset.section = await readSectionByID(data.sectionID);
    preset.presetName = data.presetName;
    preset.product = await readProductByID(data.productID);

    try {

        return await
            getConnection().manager.save(preset);

    } catch (e) {
        console.log(e)
    }


}

let json = {
    sectionID: "",
    presetName: "",
    productID: ""
}