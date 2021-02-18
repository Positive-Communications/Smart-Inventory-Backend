import Sections from "../../../entity/Sections";
import readBranchByID from "../../R/ByID/ReadBranchByID";
import readPresetByID from "../../R/ByID/ReadPresetByID";
import {getConnection} from "typeorm";

export default async function saveSections(data) {

    let section = new Sections();

    section.name = data;

    try {

    return await
            getConnection().manager.save(section);

    } catch (e) {
        console.log(e)
    }
}

let json = {
    name: "",
}