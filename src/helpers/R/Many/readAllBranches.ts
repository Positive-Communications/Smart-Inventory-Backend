import {getConnection} from "typeorm";
import Branch from "../../../entity/Branch";

export default async function readAllBranches(companyID) {

    return await
        getConnection().manager.find(Branch)
}