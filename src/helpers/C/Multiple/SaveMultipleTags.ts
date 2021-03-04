import { getConnection } from "typeorm";
import Transaction from "../../../entity/Transaction";
import saveTags from "../singles/SaveTags";

const saveMultipleTags = async (data, id) => {

    let tags = [];


    for (let tag of data.tags) {

        tags.push(await saveTags(tag, id));
    }

    await transaction(data);

    return tags;

}

export default saveMultipleTags;


const transaction = async (data) => {

    let transaction = new Transaction();
    await transaction.createItself(data);

    try {

        getConnection().manager.save(transaction);

    }catch (err) {}

}