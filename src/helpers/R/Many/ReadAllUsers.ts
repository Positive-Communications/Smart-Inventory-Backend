import {getConnection} from "typeorm";
import Users from "../../../entity/Users";

const readAllUsers = async () => {

    return await
        getConnection().manager.find(Users);
}

export default readAllUsers;