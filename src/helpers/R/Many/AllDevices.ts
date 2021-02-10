import {getConnection, getRepository} from "typeorm";
import Device from "../../../entity/Device";

async function readAllDevices(branchID) {

    return await
        getConnection()
            .createQueryBuilder()
            .select('device')
            .from(Device, 'device')
            .where('device.branch.id =:id', {id: parseInt(branchID)})
            .getMany();
}

export default readAllDevices;