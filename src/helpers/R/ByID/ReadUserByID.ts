import {getConnection} from "typeorm";
import Users from "../../../entity/Users";

export default async function readUserByID(userID) {

    return await
        getConnection()
            .manager.findOne(Users, parseInt(userID));
}