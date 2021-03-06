import {getConnection} from "typeorm";
import Gate from "../../../entity/Gate";
import PresetMeta from "../../../entity/PresetMeta";

export default async function updateGate(data, id) {    

    return await
        getConnection()
            .createQueryBuilder()
            .update(Gate)
            .set(data)
            .where('id =:id', {id: parseInt(id)})
            .execute();

}


let config = {
    name: "",
    role:"",
    hasErrors:false,
    isaActive:true,
    allowEmpty:false,
    verifyNotTrackedByRFID: false,
    checkContinuouslyForUnauthorized: false,
    doNotAllowRemoved: false,
    useForDispatchOrReceiving: false,
    allowDispatchForAllOrders: false,
    showProductCountError: false,
    allowEmptyPallets: false,
    getToDetermineItemPosition: false,
    verifyCarrierIsEmpty: false,
    branchID: ""
}