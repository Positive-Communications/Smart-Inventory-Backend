import {getConnection} from "typeorm";
import Sections from "../../../entity/Sections";

const readAllSections = async () => {

    return await
        getConnection().manager.find(Sections);
}

export default readAllSections;