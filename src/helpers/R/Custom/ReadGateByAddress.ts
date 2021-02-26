import { getConnection } from "typeorm";
import Gate from "../../../entity/Gate";

const readGateByAddress = async (address: any) => {


    return await getConnection()
        .createQueryBuilder()
        .select('gate')
        .from(Gate, 'gate')
        .where('gate.readerAddress =:address', { address: address })
        .getOne()
}

export default readGateByAddress;