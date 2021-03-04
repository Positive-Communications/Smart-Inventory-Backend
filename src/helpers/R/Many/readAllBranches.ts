import {getConnection} from "typeorm";
import Branch from "../../../entity/Branch";

export default async function readAllBranches() {

    return await
        getConnection().manager.find(Branch, {relations: ["company"]});
}