import {getConnection} from "typeorm";
import Product from "../../../entity/Product";

export default async function readProductByID(productId) {
    return await
        getConnection()
            .createQueryBuilder()
            .select('product')
            .from(Product, 'product')
            .where('product.id =:id', {id: parseInt(productId)})
            .getOne();
}
