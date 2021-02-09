import {getConnection} from "typeorm";
import Sections from "../../../entity/Sections";

export default async function readSectionByID(sectionID) {

    return await
        getConnection()
            .manager.findOne(Sections, parseInt(sectionID));

}