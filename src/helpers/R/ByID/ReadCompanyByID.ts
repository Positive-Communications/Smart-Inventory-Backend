import {getConnection} from "typeorm";
import Company from "../../../entity/Company";

export default async function readCompanyByID(companyID) {

    return await
        getConnection()
            .manager.findOne(Company, parseInt(companyID));
}