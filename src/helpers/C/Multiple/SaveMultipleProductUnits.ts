import { getConnection } from "typeorm";
import saveProductUnit from "../../../entity/SaveProductUnit";

const saveMultipleProductUnits = async(productUnitsArray) => {

    let units = [];
    
    for (let unit of productUnitsArray) {
        let newUnit = await saveProductUnit(unit);
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