import {getConnection} from "typeorm";
import Bays from "../../../entity/Bays";

export default async function readBayByID(bayID) {
    return await
        getConnection()
            .createQueryBuilder()
            .select('bays')
            .from(Bays, 'bay')
            .where('bay.id =:id', {id: parseInt(bayID)})
            .getOne();
}