import Company from "../../../entity/Company";
import { getConnection } from "typeorm";
import saveSuperUser from "../../../Auth/saveSupserUser";

export default async function saveCompany(data) {

    let company = new Company();

    company.name = data.company;
    company.superAdmin = await saveSuperUser(data);


    try {

        return await
            getConnection().manager.save(company);
    } catch (e) {
        console.log(e)
    }

}

  // company: "",
    // admin_name: "",
    // admin_phone: "",
    // admin_email: "",
    // admin_password: "",
    // confirm_password: ""
