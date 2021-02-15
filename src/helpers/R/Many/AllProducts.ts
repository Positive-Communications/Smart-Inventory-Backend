import {getConnection} from "typeorm";
import Product from "../../../entity/Product";

const readAllProducts = async () => {

    return await
        getConnection()
            .manager.find(Product, {relations: ['units', 'pallet']});
}

export default readAllProducts;

