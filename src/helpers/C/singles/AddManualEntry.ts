import ManualEntry from "../../../entity/ManualEntry";
import {getConnection} from "typeorm";


export default async function addManualEntry(data) {

    let manualEntry = new ManualEntry();

    await manualEntry.createItself(data);

    try {

        return await
            getConnection().manager.save(manualEntry);

    } catch (e) {

        console.log(e);
    }
}

let json = {
    productID: "",
    carrierID: "",
}

