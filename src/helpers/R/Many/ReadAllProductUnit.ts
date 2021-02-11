import {getConnection} from "typeorm";
import ProductUnit from "../../../entity/ProductUnit";

const readAllProductUnits = async () => {

    return await
        getConnection().manager.find(ProductUnit);
}

export default readAllProductUnits;