import { getConnection } from "typeorm";
import Pallet from "../../../entity/Pallet";

const readPalletByID = async (palletID: number) => {

    return await 
        getConnection().manager.findOne(Pallet, palletID)

}

export default readPalletByID;