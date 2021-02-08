import {getConnection} from "typeorm";
import ProductUnit from "../../../entity/ProductUnit";

export default async function readProductUnitByID(productUnitID) {

    return await
        getConnection()
            .createQueryBuilder()
            .select('productUnit')
            .from(ProductUnit, 'unit')
            .where('unit.id =:', {id: parseInt(productUnitID)})
            .getOne();

}