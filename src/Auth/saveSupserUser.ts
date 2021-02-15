import Users from "../entity/Users";
import { getConnection } from "typeorm";
import superUserGenerator from "./superUserConfig";
import readCompanyByID from "../helpers/R/ByID/ReadCompanyByID";

const saveSuperUser = async (name, id) => {

    let data = superUserGenerator();
    

    let superUser = new Users();
    await superUser.createItSelf(data);
    superUser.userName =   "admin_" + name;
    superUser.password = name + "_admin";
    superUser.hashPassword();
    superUser.isSuper = await readCompanyByID(1);

    try {
        return await
            getConnection().manager.save(superUser);

    } catch (e) {
        console.log(e);
    }
}

export default saveSuperUser;