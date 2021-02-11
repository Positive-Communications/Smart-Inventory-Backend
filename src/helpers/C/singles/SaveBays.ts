import {getConnection} from "typeorm";
import Store from "../../../entity/Store";
import Bays from "../../../entity/Bays";


export default async function saveBays(data) {

    // const store = await getConnection().manager.findOneOrFail(Store, data.storeID);

    let bay = new Bays();
    bay.name = data.name;
    bay.role = data.role;
    bay.isActive = data.isActive;
    // bay.store = store;
    bay.storageType = data.storageType;

    try {

        return await
            getConnection().manager.save(bay);
    } catch (e) {
        console.log(e);
    }
}

let json = {
    name: "",
    role: "",
    isActive: "",
    storageType: ""
}