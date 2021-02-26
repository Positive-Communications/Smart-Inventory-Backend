import {getConnection} from "typeorm";
import Gate from "../../../entity/Gate";

export default async function readGateByID(gateID: number) {


    return await
        getConnection()
            .createQueryBuilder()
            .select('gate')
            .from(Gate, 'gate')
            .where('gate.id =:id', {id:gateID})
            .getOne();
}