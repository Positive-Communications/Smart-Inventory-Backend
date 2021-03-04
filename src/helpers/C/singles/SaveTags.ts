import { getConnection } from "typeorm";
import Tags from "../../../entity/Tags";

const saveTags = async (data, id) => {

    let tag = new Tags;
    await tag.createItself(data, id);

    try {

        return await
            getConnection().manager.save(tag);

    }catch(e){
        console.log(e);
    }
}

export default saveTags;