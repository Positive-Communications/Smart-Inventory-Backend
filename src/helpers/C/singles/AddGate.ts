import Gate from "../../../entity/Gate";
import {getConnection} from "typeorm";

export default async function addGate(data) {

    let gate = new Gate();

    await gate.createItself(data);

    const valid = await gate.isLegit();

    try {
        if (valid)
            return await
                getConnection().manager.save(gate);
    } catch (e) {
        console.log(e);
    }
}

let config = {
    name: "",
    role: "",
    hasErrors: false,
    isActive: true,
    allowEmpty: false,
    verifyNotTrackedByRFID: false,
    checkContinuouslyForUnauthorized: false,
    doNotAllowRemoved: false,
    useForDispatchOrReceiving: false,
    allowDispatchForAllOrders: false,
    showProductCountError: false,
    allowEmptyPallets: false,
    getToDetermineItemPosition: false,
    verifyCarrierIsEmpty: false,
    branchID: "",
    allowManual: false,
    verifyStoredUsingHandHeld: false,
}