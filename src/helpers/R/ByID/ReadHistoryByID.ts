import { getConnection } from "typeorm";
import ScanProductHistory from "../../../entity/ScanProductHistory";

const readHistoryByID = async (id: number)=>{

    return await 
        getConnection().manager.findOne(ScanProductHistory, id)

}

export default readHistoryByID;