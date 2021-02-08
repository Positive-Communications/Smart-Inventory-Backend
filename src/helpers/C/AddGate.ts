import Gate from "../../entity/Gate";
import readBranchByID from "../R/ByID/ReadBranchByID";
import {getConnection} from "typeorm";

export default async function addGate(data) {

    let gate = new Gate()
    gate.name = data.name;
    gate.role = data.role;
    gate.hasErrors = data.hasErrors;
    gate.isaActive = data.isActive;
    gate.allowManual = data.allowManual;
    gate.allowEmpty = data.allowEmpty;
    gate.verifyNotTrackedByRFID = data.verifyProductNotTrackedByRFID;
    gate.checkContinuouslyForUnauthorized = data.checkContinuouslyForUnauthorized;
    gate.doNotAllowRemoved = data.doNotAllowRemoved;
    gate.useForDispatchOrReceiving = data.useForDispatchOrReceiving;
    gate.allowDispatchForAllOrders = data.allowDispatchForAllOrders;
    gate.showProductCountError = data.showProductCountError;
    gate.allowEmptyPallets = data.allowEmptyPallets;
    gate.getToDetermineItemPosition = data.getToDetermineItemPosition;
    gate.verifyCarrierIsEmpty = data.verifyCarrierIsEmpty;
    gate.branch = await readBranchByID(data.branchID)

    try{
        return await
            getConnection().manager.save(gate);
    }catch (e){
        console.log(e)
    }

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