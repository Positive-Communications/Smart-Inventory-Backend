import Users from "../../../entity/Users";
import {getConnection} from "typeorm";

const readUserByUsername = async (username) => {

    return await
        getConnection()
            .createQueryBuilder()
            .select('user')
            .from(Users, 'user')
            .where('user.userName =:user', {user: username})
            .getOne();
}

export default readUserByUsername;