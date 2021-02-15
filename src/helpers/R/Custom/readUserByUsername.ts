import Users from "../../../entity/Users";
import {getConnection} from "typeorm";

const readUserByUsername = async (username) => {

    return await
        getConnection()
            .createQueryBuilder()
            .select('user')
            .from(Users, 'user')
            .where('user.userName =:user', {user: username})
            .leftJoinAndSelect('user.isSuper', 'superAmdmn')
            .getOne();
}

export default readUserByUsername;