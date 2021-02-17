import {getConnection} from "typeorm";
import Bays from "../../../entity/Bays";
import readProductByID from "../../R/ByID/ReadProductByID";
import getOrCreateStore from "../Custom/GetOrCreateStore";


export default async function saveBays(data) {

    console.log(data);
    

    let bay = new Bays();

    bay.name = data.nameNumber;
    bay.role = data.role;
    bay.isActive = data.isActive;
    bay.store = await getOrCreateStore(data.store);
    bay.storageType = data.storageType;
    bay.hasErrors = data.hasErrors;
    bay.product = await readProductByID(data.product.id)

    console.log(data.product.id);
    

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
    storageType: "",
    hasErrors: "",
    store: ''
}