import {getConnection} from "typeorm";
import ProductTags from "../../../entity/ProductTags";

export default async function readProductTagById(productTagID) {

    return await
        getConnection()
            .createQueryBuilder()
            .select('productTag')
            .from(ProductTags, 'tag')
            .where('tag.id =:id', {id: productTagID})
            .getOne();
}