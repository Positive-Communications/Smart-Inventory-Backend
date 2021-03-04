import Users from "../entity/Users";
import { getConnection } from "typeorm";
import superUserGenerator from "./superUserConfig";

const saveSuperUser = async (staff) => {

    let data = superUserGenerator();
    

    let superUser = new Users();
    await superUser.createItSelf(data);
    superUser.userName =   staff.admin_name;
    superUser.email = staff.admin_email;
    superUser.phone = staff.admin_phone;
    superUser.password = staff.admin_password;
    superUser.hashPassword();

    try {
        return await
            getConnection().manager.save(superUser);

    } catch (e) {
        console.log(e);
    }
}

export default saveSuperUser;