import {getConnection} from "typeorm";
import ProductUnit from "../../../entity/ProductUnit";

export default async function readProductUnitByID(productUnitID) {

    return await
        getConnection()
            .manager.findOne(ProductUnit, parseInt(productUnitID));

}