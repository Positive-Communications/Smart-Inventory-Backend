import {getConnection} from "typeorm";
import Sections from "../../../entity/Sections";

const readAllSections = async () => {

    return await
        getConnection().manager.find(Sections,{relations:["presets", "presets.meta" , "presets.meta.gate"]});
}

export default readAllSections;