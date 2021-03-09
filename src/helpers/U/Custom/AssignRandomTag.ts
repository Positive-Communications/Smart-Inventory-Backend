import { getConnection } from "typeorm";
import Tags from "../../../entity/Tags";
// import readAllUnasignedTags from "../../R/Many/AllUnassignedTags";

const assignRandomTag = async () => {


    const tags = await getConnection().manager.find(Tags, { relations: ["product", "scan", "previousScan"] })

    let productTags =  tags.filter(tag => tag.epc.startsWith("product"));

    return productTags[Math.floor(Math.random() * tags.length)];

}

export default assignRandomTag;