import Pallet from "../../entity/Pallet";
import readProductByID from "../R/ByID/ReadProductByID";
import {getConnection} from "typeorm";

export default async function savePallet(data) {

    let pallet = new Pallet();

    pallet.product = await readProductByID(data.productID);
    pallet.count = data.count;
    pallet.type = data.type;

    try {

        return await
            getConnection().manager.save(pallet);

    } catch (e) {
        console.log(e)
    }

}

let json = {
    productID: "",
    count: "",
    type: "",
}