import ProductUnit from "./ProductUnit";
import {getConnection} from "typeorm";

export default async function saveProductUnit(data) {

    let productUnit = new ProductUnit();

    await productUnit.createItself(data);
    

    try {

        return await
        getConnection().manager.save(productUnit);

    } catch (e) {
        console.log(e);
    }


}

let json = {
    unit: " ",
    numberOfProducts: "",
    isTrackedByRFID: false,
    useUnitAsDefault: false,
}