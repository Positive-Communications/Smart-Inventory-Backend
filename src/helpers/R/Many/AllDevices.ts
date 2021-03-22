import {getConnection, getRepository} from "typeorm";
import Device from "../../../entity/Device";

async function readAllDevices(branchID) {

    return await
        getConnection().manager.find(Device)
}

export default readAllDevices;