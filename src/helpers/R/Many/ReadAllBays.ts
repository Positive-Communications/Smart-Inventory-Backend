import {getConnection} from "typeorm";
import Bays from "../../../entity/Bays";

const readAllBays = async () => {

    return await
        getConnection().manager.find(Bays);
}

export default readAllBays;