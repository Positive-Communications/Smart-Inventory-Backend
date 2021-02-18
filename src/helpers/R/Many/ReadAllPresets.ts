import {getConnection} from "typeorm";
import Presets from "../../../entity/Presets";

const readAllPresets = async () => {

    return await
        getConnection().manager.find(Presets, {relations:["section"]});
}

export default readAllPresets;