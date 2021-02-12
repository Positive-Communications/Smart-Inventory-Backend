import {getConnection} from "typeorm";
import Product from "../../../entity/Product";

const readAllProducts = async () => {

    return await
        getConnection()
            .manager.find(Product, {relations: ['unit', 'pallet']});
}

export default readAllProducts;

