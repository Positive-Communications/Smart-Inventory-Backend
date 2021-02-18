import { getConnection } from "typeorm";
import Store from "../../../entity/Store";

const readAllStores = async () => {

    return await getConnection().manager.find(Store, {relations: ['bays', 'gates']});

}

export default readAllStores;
