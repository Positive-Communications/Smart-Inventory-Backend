import { getConnection } from "typeorm";
import ScanProductHistory from "../../../entity/ScanProductHistory";

const readHistoryByGate = async (gateID: number) => {

    return await getConnection()
        .createQueryBuilder()
        .select('history')
        .from(ScanProductHistory, 'history')
        .where('history.gate.id =:id', { id: gateID })
        .leftJoinAndSelect('history.carrier', 'carrier')
        .leftJoinAndSelect('carrier.type', 'carrierType')
        .leftJoinAndSelect('history.tag', 'tag')
        .leftJoinAndSelect('tag.pallet', 'pallet')
        .leftJoinAndSelect('tag.product', 'product')
        .leftJoinAndSelect('tag.alerts', 'alert')
        .getMany();
}

export default readHistoryByGate;