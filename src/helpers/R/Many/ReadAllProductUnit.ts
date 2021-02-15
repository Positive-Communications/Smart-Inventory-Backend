import {getConnection} from "typeorm";
import Unit from "../../../entity/Units";

const readAllProductUnits = async () => {

    return await
        getConnection().manager.find(Unit);
}

export default readAllProductUnits;