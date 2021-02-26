import { getConnection } from "typeorm";
import ScanProductHistory from "../../../entity/ScanProductHistory";

const addHistory = async (data: { gateID: number; tagEpc: string; }) => {

    let history = new ScanProductHistory();
    await history.createItself(data)

    try {
        return await getConnection().manager.save(history);
    } catch (e) {
        console.log(e);
    }

}

export default addHistory;