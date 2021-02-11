import Carrier from "../../../entity/Carrier";
import {getConnection} from "typeorm";

export default async function saveCarrier(data) {

    let carrier = new Carrier()

    await carrier.createItSelf(data);

    try {

        return await
            getConnection().manager.save(carrier);

    } catch (e) {
        console.log(e)
    }
}

let json = {
    number: "",
    type: "", //typeID,
    user: "", //userID,
    isFixed: true,
    status: ""
}