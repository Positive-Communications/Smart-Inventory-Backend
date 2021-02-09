import {getConnection} from "typeorm";
import Carrier from "../../../entity/Carrier";

export default async function readCarrierById(carrierID) {

    return await
        getConnection()
            .manager.findOne(Carrier, parseInt(carrierID));

}
