import Product from "../../../entity/Product";
import readGateByID from "../../R/ByID/ReadGateByID";
import readProductUnitByID from "../../R/ByID/ReadProductUnitByID";
import {getConnection} from "typeorm";

export default async function saveProduct(data) {

    let product = new Product();

    await product.createItself(data)

    if (await product.isLegit())
        try {
            return await
                getConnection().manager.save(product);
        } catch (e) {
            console.log(e)
        }
}

let json = {
    name: "",
    description: "",
    expiry: "",
    monthsLeftToExpire: "",
    isStoredOnPallet: false,
    palletIsTrackedByRFID: "",
    unitID: "",
    status: "empty",
    dispatchGateID: "",
}