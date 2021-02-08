import {getConnection} from "typeorm";
import Users from "../../../entity/Users";

export default async function readUserByID(userID) {

    return await
        getConnection()
            .createQueryBuilder()
            .select('user')
            .from(Users, 'user')
            .where('user.id =:id', {id: parseInt(userID)})
            .getOne();
}