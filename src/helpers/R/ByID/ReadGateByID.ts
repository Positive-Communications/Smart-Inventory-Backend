import {getConnection} from "typeorm";
import Gate from "../../../entity/Gate";

export default async function readGateByID(gateID) {

    return await
        getConnection()
            .createQueryBuilder()
            .select('gate')
            .from(Gate, 'gate')
            .where('gate.id =:id', {id: parseInt(gateID)})
            .getOne();
}