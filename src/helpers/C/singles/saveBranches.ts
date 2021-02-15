import {getConnection} from "typeorm";
import Branch from "../../../entity/Branch";
import readCompanyByID from "../../R/ByID/ReadCompanyByID";

export default async function saveBranches(data) {

    let branch = new Branch();

    branch.code = data.code;
    branch.info = data.info;
    branch.city = data.city;
    branch.isActive = data.isActive;
    branch.phone =data.phone;
    branch.email = data.email;
    branch.company = await readCompanyByID(data.companyID);
    branch.streetRoad = data.streetRoad;

    try {

        return await
            getConnection().manager.save(branch)
    } catch (e) {
        console.log(e)
    }
}

let config = {
    code: "",
    info: "",
    city: "",
    isActive: false,
    phone: "",
    email: "",
    companyID: "", 
    streetRoad: "",
}