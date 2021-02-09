import {getConnection} from "typeorm";
import Product from "../../../entity/Product";

export default async function readProductByID(productID) {
    return await
        getConnection()
            .manager.findOne(Product, parseInt(productID));
}
