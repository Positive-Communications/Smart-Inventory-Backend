import CarrierType from "../../../entity/CarrierType";
import {getConnection} from "typeorm";

export default async function saveCarrierTypes(data) {


    let carrierType = new CarrierType();
    carrierType.name = data.name;
    try {
        return await
            getConnection().manager.save(carrierType)
    } catch (e) {
        console.log(e)
    }
}

let json = {
    name: ""
}