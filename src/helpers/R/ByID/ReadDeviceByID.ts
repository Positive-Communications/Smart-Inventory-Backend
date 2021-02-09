import {getConnection} from "typeorm";
import Device from "../../../entity/Device";

export default async function readDeviceByID(deviceID) {

    return await
        getConnection()
            .manager.findOne(Device, parseInt(deviceID));
}