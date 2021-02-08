import ProductUnit from "./ProductUnit";
import readProductByID from "../helpers/R/ByID/ReadProductByID";
import {getConnection} from "typeorm";

export default async function saveProductUnit(data) {

    let productUnit = new ProductUnit();

    productUnit.unit = data.unit;
    productUnit.numberOfProducts = data.number;
    productUnit.isTrackedByRFID = data.isTrackedByRFID;
    productUnit.useUnitAsDefault = data.useUnitAsDefault;
    productUnit.product = await readProductByID(data.productID);

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
    productID: ""
}