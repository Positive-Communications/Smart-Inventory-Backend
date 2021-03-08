import { getConnection } from "typeorm";
import Tags from "../../../entity/Tags";
// import readAllUnasignedTags from "../../R/Many/AllUnassignedTags";

const assignRandomTag = async () =>{


    const tags = await getConnection().manager.find(Tags, {relations: ["product"]})  


    return tags[Math.floor(Math.random()* tags.length)];

}

export default assignRandomTag;