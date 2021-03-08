import Device from "../../../entity/Device";

import {getConnection} from "typeorm";
import readBayByID from "../../R/ByID/ReadBayByID";
import readSectionByID from "../../R/ByID/ReadSectionByID";
import readBranchByID from "../../R/ByID/ReadBranchByID";

export default async function saveDevice(data: any) {

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

    device.name = Math.floor(Math.random() *10).toString();
    device.branch = await readBranchByID(data)

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