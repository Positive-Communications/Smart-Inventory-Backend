import {getConnection} from "typeorm";
import ProductTags from "../../../entity/Tags";

export default async function readProductTagById(productTagID) {

    return await
        getConnection()
            .manager.findOne(ProductTags, parseInt(productTagID));
}