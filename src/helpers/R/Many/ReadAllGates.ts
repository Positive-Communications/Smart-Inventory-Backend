import {getConnection} from "typeorm";
import Gate from "../../../entity/Gate";

const readAllGates = async () => {
    return await
        getConnection().manager.find(Gate);
}

export default readAllGates;