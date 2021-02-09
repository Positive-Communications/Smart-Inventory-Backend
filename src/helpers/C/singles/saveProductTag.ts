import ProductTags from "../../../entity/ProductTags";
import readProductByID from "../../R/ByID/ReadProductByID";
import {getConnection} from "typeorm";

export default async function saveProductTag(data) {

    let productTag = new ProductTags();

    productTag.epc = data.epc;
    productTag.tid = data.tid;
    productTag.type = data.type;

    switch (data.context){
        case "HAS_PRODUCT":
            productTag.product = await readProductByID(data.productID);
        default:
    }

    try {

        return await
            getConnection().manager.save(productTag);

    } catch (e) {
        console.log(e);
    }
}

let json = {
    epc: "",
    tid: "",
    type:"",
    productID: "",
    context: "" // empty or "HAS_PRODUCT"
}