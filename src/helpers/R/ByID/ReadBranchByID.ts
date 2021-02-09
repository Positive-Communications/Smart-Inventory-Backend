import {getConnection} from "typeorm";
import Branch from "../../../entity/Branch";

export default async function readBranchByID(branchID) {

    return await
        getConnection()
            .manager.findOne(Branch, parseInt(branchID));

}