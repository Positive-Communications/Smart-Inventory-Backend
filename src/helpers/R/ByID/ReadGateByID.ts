import {getConnection} from "typeorm";
import Gate from "../../../entity/Gate";

export default async function readGateByID(gateID) {

    return await
        getConnection()
            .manager.findOne(Gate, parseInt(gateID));
}