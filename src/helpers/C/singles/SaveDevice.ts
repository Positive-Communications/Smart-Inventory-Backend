import Device from "../../../entity/Device";

import {getConnection} from "typeorm";
import readBayByID from "../../R/ByID/ReadBayByID";
import readSectionByID from "../../R/ByID/ReadSectionByID";
import readBranchByID from "../../R/ByID/ReadBranchByID";

export default async function saveDevice(data) {

    // let context;
    // switch (data.context) {
    //     case "storage":
    //         context = await readBayByID(data.contextID);
    //         break;
    //
    //     case "packaging":
    //         context = await readSectionByID(data.contextID);
    //         break;
    //
    //     default:
    //         context = null;
    //         break;
    // }

    let device = new Device();

    device.name = data.name;
    device.role = data.role;
    device.allowPalletsToBeCountedManually = data.allowPalletsToBeCountedManually;
    device.isActive = data.isActive;
    device.hasErrors = data.hasErrors;
    device.doNotAllowRemovalOfEmptyPallet = data.doNotAllowRemovalOfEmptyPallet;
    device.verifyStoredUsingHandHeld = data.verifyStoredUsingHandHeld;
    device.showProductCountError = data.showProductCountError;
    device.doNotAllowRemoval = data.doNotAllowRemoval;
    device.verifyProductNotTrackedByRFID = data.verifyProductNotTrackedByRFID;
    device.automaticallyActivateRecallProductIfRequired = data.automaticallyActivateRecallProductIfRequired;
    device.recordEmptyPallets = data.recordEmptyPallets;
    device.dispatchingOrReceiving = data.dispatchingOrReceiving;
    device.branch = await readBranchByID(data.branchID)
    // data.context === "packaging" ? device.sections = context : data.context === "storage" ? device.bays = context : null;

    try {

        return await
            getConnection().manager.save(device);

    } catch (e) {
        console.log(e)
    }
}

let json = {
    name: "",
    role: "",
    allowPalletsToBeCountedManually: false,
    isActive: false,
    hasErrors: false,
    doNotAllowRemovalOfEmptyPallet: false,
    verifyStoredUsingHandHeld: false,
    showProductCountError: false,
    doNotAllowRemoval: false,
    verifyProductNotTrackedByRFID: false,
    automaticallyActivateRecallProductIfRequired: false,
    recordEmptyPallets: false,
    dispatchingOrReceiving: false,
    branchID: ""
    // context: "",
    // contextID: ""
}