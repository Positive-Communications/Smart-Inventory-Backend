import ProductUnit from "./ProductUnit";
import {getConnection} from "typeorm";

export default async function saveProductUnit(data) {

    let productUnit = new ProductUnit();

    productUnit.unit = data.unit;
    productUnit.numberOfProducts = data.numberOfProducts;
    productUnit.isTrackedByRFID = data.isTrackedByRFID;
    productUnit.useUnitAsDefault = data.useUnitAsDefault;
    // productUnit.product = await readProductByID(data.productID);

    try {

        return await
            getConnection().manager.save(productUnit);

    } catch (e) {
        console.log(e);
    }


}

let json = {
    unit: "",
    numberOfProducts: "",
    isTrackedByRFID: false,
    useUnitAsDefault: false,
}