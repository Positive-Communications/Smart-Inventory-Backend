import {getConnection, getRepository} from "typeorm";
import Device from "../../../entity/Device";

export default async function getAddDevices(branchID) {
    return await
        getConnection()
            .createQueryBuilder()
            .select('device')
            .from(Device, 'device')
            .where('device.branch.id =:id', {id: parseInt(branchID)})
            .getMany();
}