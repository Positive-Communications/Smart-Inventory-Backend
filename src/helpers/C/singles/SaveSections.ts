import Sections from "../../../entity/Sections";
import {getConnection} from "typeorm";

export default async function saveSections(data: string) {

    let section = new Sections();

    section.name = data;

    try {

    return await
            getConnection().manager.save(section);

    } catch (e) {
        console.log(e)
    }
}



let config = {
    expiry: "2021-01-",
    palletType: "Wood",
    presetID: 4,
    productID: 1,
    palletID: 1,
    palletIsTrackedByRFID: true,
    units: 1,
    trackRFIDTagType: "isProductTagOnly",
    gateID : ""
}