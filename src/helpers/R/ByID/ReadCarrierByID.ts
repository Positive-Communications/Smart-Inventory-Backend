import {getConnection} from "typeorm";
import Carrier from "../../../entity/Carrier";

export default async function readCarrierById(carrierID) {

    return await
        getConnection()
            .createQueryBuilder()
            .select('carrier')
            .from(Carrier, 'carrier')
            .where('carrier.id =:id', {id:parseInt(carrierID)})
            .getOne();

}
