import {getConnection} from "typeorm";
import CarrierType from "../../../entity/CarrierType";

export default async function getAllCarrierTypes() {

    return await
        getConnection().manager.find(CarrierType)
}