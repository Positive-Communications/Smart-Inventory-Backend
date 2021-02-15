import { getConnection } from "typeorm";
import ProductUnit from "../../../entity/ProductUnit";
import addProductUnit from "../singles/AddProductUnit";

const saveMultipleProductUnits = async(productUnitsArray) => {

    let units = [];

    for (let unit of productUnitsArray) {
        let newUnit = await addProductUnit(unit);
        units.push(newUnit);
    }

    return units;

}

export default saveMultipleProductUnits;

const config = [
    {
        unit: {},
        count: "",
        isTracked: "",
        default: "",
    }
]