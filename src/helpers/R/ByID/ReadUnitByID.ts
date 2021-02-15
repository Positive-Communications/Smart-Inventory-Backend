import { getConnection } from "typeorm";
import Unit from "../../../entity/Units";

const readUnitByID = async (id) =>{

    return await 
        getConnection().manager.findOne(Unit, parseInt(id))

}

export default readUnitByID;