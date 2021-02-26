import Product from "../../../entity/Product";
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
    palletIsTrackedByRFID: true,
    gateID: "",
    status: "",
    hasErrors: false,
    units: [
        {
            unit: {},
            count: "",
            isTracked: "",
            default: "",
        }
    ],
    pallets: [
        {
            unit: {},
            count: "",
            palletType: "",
        }
    ], gates:[]
}