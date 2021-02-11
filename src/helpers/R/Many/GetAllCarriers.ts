import {getConnection} from "typeorm";
import Carrier from "../../../entity/Carrier";

const getAllCarriers = async () => {

    return await
        getConnection().manager.find(Carrier);
}

export default getAllCarriers;