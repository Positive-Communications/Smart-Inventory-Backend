import Device from "../../../entity/Device";

import { getConnection } from "typeorm";
import readBayByID from "../../R/ByID/ReadBayByID";
import readSectionByID from "../../R/ByID/ReadSectionByID";
import readBranchByID from "../../R/ByID/ReadBranchByID";

export default async function saveDevice(data: any) {

    let device = new Device();
    await device.assignUUID();
    data === "isHandheld" ? device.isHandHeld = true : data === "isTablet" ? device.isTablet === true : data === "isFixed" ? device.isFixed === true : data === "isSensor" ? device.isSensor === true : data === "isWeb" ? device.isWeb = true : "E"

    try {

        return await
            getConnection().manager.save(device);

    } catch (e) {
        console.log(e)
    }
}

