import {getConnection} from "typeorm";
import Device from "../../../entity/Device";

async function updateDevices(data, id) {
    try {
        return await
            getConnection()
                .createQueryBuilder()
                .update(Device)
                .set({
                    name: data.name,
                    role: data.role,
                    allowPalletsToBeCountedManually: data.allowPalletsToBeCountedManually,
                    doNotAllowRemovalOfEmptyPallet: data.doNotAllowRemovalOfEmptyPallet,
                    verifyStoredUsingHandHeld: data.verifyStoredUsingHandHeld,
                    showProductCountError: data.showProductCountError,
                    doNotAllowRemoval: data.doNotAllowRemoval,
                    verifyProductNotTrackedByRFID: data.verifyProductNotTrackedByRFID,
                    automaticallyActivateRecallProductIfRequired: data.automaticallyActivateRecallProductIfRequired,
                    recordEmptyPallets: data.recordEmptyPallets,
                    dispatchingOrReceiving: data.dispatchingOrReceiving,
                })
                .where('id =:id', {id: parseInt(id)})
                .execute();

    } catch (e) {
        console.log(e);
    }
}

export default updateDevices;


let json = {
    name: "",
    role: "",
    allowPalletsToBeCountedManually: false,
    doNotAllowRemovalOfEmptyPallet: false,
    verifyStoredUsingHandHeld: false,
    showProductCountError: false,
    doNotAllowRemoval: false,
    verifyProductNotTrackedByRFID: false,
    automaticallyActivateRecallProductIfRequired: false,
    recordEmptyPallets: false,
    dispatchingOrReceiving: false,
    deviceID: ""
}