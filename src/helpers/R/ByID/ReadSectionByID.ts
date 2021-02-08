import {getConnection} from "typeorm";
import Sections from "../../../entity/Sections";

export default async function readSectionByID(sectionID) {

    return await
        getConnection()
            .createQueryBuilder()
            .select('section')
            .from(Sections, 'section')
            .where('section.id =:id', {id: parseInt(sectionID)})
            .getOne();

}