import {getConnection} from "typeorm";
import Device from "../../../entity/Device";

export default async function readDeviceByID(deviceID) {

    return await
        getConnection()
            .createQueryBuilder()
            .select('device')
            .from(Device, 'device')
            .where('device =:id', {id: parseInt(deviceID)})
            .getOne();
}