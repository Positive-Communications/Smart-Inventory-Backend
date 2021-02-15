import { getConnection, getConnectionManager } from "typeorm";
import Gate from "../../../entity/Gate";

const customMultipleGatees = async(gateArray) =>{

    let gates = [];

    for (let gate of gateArray){
        const _gate = await getConnection().manager.findOne(Gate, parseInt(gate));
        gates.push(_gate);
    }

    return gates;

}

export default customMultipleGatees;