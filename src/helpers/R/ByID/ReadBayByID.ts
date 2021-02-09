import {getConnection} from "typeorm";
import Bays from "../../../entity/Bays";

export default async function readBayByID(bayID) {
    return await
        getConnection()
            .manager.findOne(Bays, parseInt(bayID))
}