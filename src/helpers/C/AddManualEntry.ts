import ManualEntry from "../../entity/ManualEntry";
import readProductByID from "../R/ByID/ReadProductByID";
import readCarrierById from "../R/ByID/ReadCarrierByID";
import {getConnection} from "typeorm";


export default async function addManualEntry(data) {

    let manualEntry = new ManualEntry();

    manualEntry.product = await readProductByID(data.ProductID);
    manualEntry.carrier = await readCarrierById(data.carrierID);

    try {

        return await
            getConnection().manager.save(manualEntry);

    } catch (e) { console.log(e); }
}

let json = {
    productID: "",
    carrierID: "",
}

