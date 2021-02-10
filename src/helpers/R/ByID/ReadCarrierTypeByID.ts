import {getConnection} from "typeorm";
import CarrierType from "../../../entity/CarrierType";

const readCarrierTypeByID = async carrierTypeID => {

    return await
        getConnection().manager.findOne(CarrierType, parseInt(carrierTypeID));

}


export default readCarrierTypeByID;