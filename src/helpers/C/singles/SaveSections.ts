import Sections from "../../../entity/Sections";
import readBranchByID from "../../R/ByID/ReadBranchByID";
import readPresetByID from "../../R/ByID/ReadPresetByID";
import {getConnection} from "typeorm";

export default async function saveSections(data) {

    let section = new Sections();

    section.role = data.role;
    section.name = data.name;
    section.capacity = data.capacity;
    section.hasErrors = data.hasErrors;
    section.branch = await readBranchByID(data.branchID);
    // section.presets = await readPresetByID(data.presetId);

    try {

        return await
            getConnection().manager.save(section);

    } catch (e) {
        console.log(e)
    }
}

let json = {
    role: "",
    name: "",
    capacity: "",
    hasErrors: false,
    branchID: "",
    presetID: ""
}